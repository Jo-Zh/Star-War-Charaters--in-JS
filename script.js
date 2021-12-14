//get element from html
const elems = document.querySelectorAll(".API");
const elemsArray = Object.entries(elems);
const films=document.querySelector(".APIarray");
const button = document.getElementById("searchBTN");

// Event triggered by clicking
button.addEventListener("click", (e) => {
  
  //setting up before data loaded
  e.preventDefault();
  elemsArray.forEach(([key, value]) => {
    value.innerHTML = "<em>Loading...</em>";
  });
  films.innerHTML="<em>loading...</em>";
  
 //fetching and displaying...
  const chara = Math.floor(Math.random() * 83);
  fetch(`https://swapi.dev/api/people/${chara}/`)
    .then((request1) => request1.json())
    .then((data) => {
      elemsArray.forEach(([key, value]) => {
        value.innerText = data[value.id];
      });
      films.innerText="";
      data[films.id].forEach((item)=>{
        let ul=document.createElement("ul");
        let li=document.createElement("li");
        li.innerText=item;
        ul.appendChild(li);
        films.appendChild(ul);
     });
   });
});