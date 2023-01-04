const root = document.getElementById("root");
const getByCard = async () => {
  fetch("https://randomuser.me/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      root.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOobN2lNm_JXxMhUhF3Uxdehn46t7RfNsRSQ&usqp=CAU" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>`;
    });
  //   .then((res) => res.json())
  //       .then((res) => {
  //         alert("amjiltta ustgalaa");
  //         getCarsHtml();
  //       })
  //       .catch((res) => {
  //         console.warn(err);
  //       });
};
// const getCard = async function (card) {
//   await console.log(getByCard());
//   return;
// };
getByCard();
// root.innerHTML = getByCard();
