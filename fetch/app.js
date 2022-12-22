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

let activePage = 1;
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
      pagination += `
      <li class="page-item">
      <a class="page-link" href="javascript:getProducts(${limit} , ${
        limit * (page - 1)
      })">${page}</a>
      </li>`;
    }
  }

  pagination += ` </ul>
</nav>`;
  return pagination;
}

async function getProducts(limit = 10, skip = 0) {
  productsTarget.innerHTML = "";
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();

  // for(let i=0; i<data.products.length; i++){
  //     const product=data.products[i]
  // }

  for (const product of data.products) {
    productsTarget.innerHTML += getProductCard(product);
  }
  productsTarget.innerHTML += getPagination(
    data.total,
    skip / limit + 1,
    limit
  );
}

getProducts();
