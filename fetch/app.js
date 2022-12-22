fetch("http://127.0.0.1:5502/fetch/data.html")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
