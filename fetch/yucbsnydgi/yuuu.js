fetch("https://randomuser.me/api", {
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(card),
});

const getCard = function (card) {
  return ` 
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <img
                src="${card.imageUrl}"
                class="cars-img-top"
                alt=""
              />
    <p class="card-text">${card.phone}</p>
    <p class="card-text">${card.location}</p>
    <p class="card-text">${card.country}</p>
  </div> s
</div>
`;
};
