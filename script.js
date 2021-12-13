const elems = document.querySelectorAll(".API");
const elemsArray = Object.entries(elems);
const button = document.getElementById("searchBTN");
button.addEventListener("click", (e) => {
  e.preventDefault();
  elemsArray.forEach(([key, value]) => {
    value.innerHTML = "<em>Loading...</em>";
  });
  const chara = Math.floor(Math.random() * 83);
  fetch(`https://swapi.dev/api/people/${chara}/`)
    .then((request1) => request1.json())
    .then((data) => {
      console.log(data);
      elemsArray.forEach(([key, value]) => {
        value.innerText = data[value.id];
      });
    });
});
