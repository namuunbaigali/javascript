// fetch("http://127.0.0.1:5502/fetch/data.html")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// //   get
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// //   post
// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// // put
// fetch("https://dummyjson.com/products/1", {
//   method: "PUT" /* or PATCH */,
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "iPhone Galaxy +1",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// // delete
// fetch("https://dummyjson.com/products/1", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const params = new URL(window.location).searchParams;
const category = params.get("category");
const limit = Number(params.get("limit")) || 12;
const page = Number(params.get("page")) || 1;
const searchQuery = params.get("q");

function getProductCard(product) {
  return `<div class="col-4">
            <div class="card">
             <div class='ratio ratio-4x3'>
              <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" />
             </div>
              <div class="card-body">
                <p class="card-name">${product.title}</p>
                <p class="card-category">${product.category}</p>
                <p class="card-name card-price">$${product.price}</p>
              </div>
            </div>
          </div>`;
}

const productsTarget = document.querySelector("#productsTarget");

// let activePage = 1;
function getPagination(total, currenPage, limit) {
  let pagination = `<nav aria-label="...">
  <ul class="pagination justify-content-center">`;
  const totalPages = Math.ceil(total / limit);
  for (let page = 0; page <= totalPages; page++) {
    if (page === currenPage) {
      pagination += ` <li class="page-item active" aria-current="page">
      <span class="page-link">${page}</span>
    </li>`;
    } else {
      const queryParam = searchQuery ? "&q=" + searchQuery : "";
      pagination += `
      <li class="page-item">
      <a class="page-link" href=" ${
        window.location.pathname
      }?limit=${12} & page=${page}${queryParam}"> ${page} 
      </a>
      </li>`;
    }
  }

  pagination += ` </ul></nav>`;
  return pagination;
}

async function getProducts(limit, page, category, searchQuery) {
  productsTarget.innerHTML = "";
  const skip = (page - 1) * limit;

  let dataUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  if (category) {
    dataUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  }
  if (searchQuery) {
    dataUrl = `https://dummyjson.com/products/category/${searchQuery}?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(dataUrl);
  const data = await res.json();

  let products = data.products;

  products.forEach(function (product) {
    productsTarget.innerHTML += getProductCard(product);
  });

  productsTarget.innerHTML += getPagination(data.total, page, limit);
}

getProducts(limit, page, category, searchQuery);

function getMenuItem(menuItem) {
  return `<li class="nav-item">
              <a class="nav-link ${
                menuItem.isActive && "active"
              }" aria-current="page" href="${menuItem.link}">${
    menuItem.name
  }</a>
            </li>`;
}

const menuTarget = document.querySelector("#menuTarget");

async function getCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = await res.json();
  return categories.slice(0, 5);
}

async function getMenus() {
  let categories = await getCategories();

  const menuCategories = categories.map((category) => {
    return {
      isActive: false,
      link: window.location.pathname + "?category=" + category,
      name: category,
    };
  });
  menuCategories.map((menuCategory) => {
    menuTarget.innerHTML += getMenuItem(menuCategory);
  });
}
getMenus();
