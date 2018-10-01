const buttonSearch = $("#button-character");
const buttonComic = $("#button-comic");
let marvelCharacter;
let marvelComic;
function putCharacters(){
  let inputSearch = $("#input-character").val();
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputSearch}&limit=10&ts=1&apikey=ca5c7c03b43ce92350960674d66548c2&hash=39840f36a0737bc4bf9e9c1b737d67b1`;
  $("#showed-informartion").html(
    `<div class="first-index-style">
       <div class="spider-neon"></div>
    </div>`);
  $.ajax({
    type: "GET",
    url,
    success: loadCharacter,
    error, 
    crossDomain: true
  });
}
function loadCharacter (marvel){
  marvelCharacter = marvel.data.results;
  if (marvelCharacter.length === 0){
    let toShowCharacter = document.getElementById("showed-informartion");
    toShowCharacter.innerHTML = "This character does not exists";
  } else {
    showCharacters();
  }
}
function showCharacters (){
  let toShowCharacter = document.getElementById("showed-informartion");
  toShowCharacter.innerHTML = 
  `<div class="showed-characters-style d-flex flex-column align-items-center">${marvelCharacter.map(doc =>`
    <div class="d-flex flex-column align-items-start">
      <hr class="w-50">  
      <h3>${doc.name}</h3>
      <img class="image-size" src="${doc.thumbnail.path}.jpg">
    </div>
    <div class="width-forty">
      <p>Description:</p>
      <p>${doc.description}</p>
      <p>Available Comics: ${doc.comics.available}</p>
      <p>Available Series: ${doc.series.available}</p>
      <p>Available Stories: ${doc.stories.available}</p>`).join("")}
    </div>
    <hr class="w-50">
  </div>`;
}
function putComics(){
  let inputComic = $("#input-comic").val();
  const urlTwo = `https://gateway.marvel.com:443/v1/public/comics?format=comic&titleStartsWith=${inputComic}&limit=10&ts=1&apikey=ca5c7c03b43ce92350960674d66548c2&hash=39840f36a0737bc4bf9e9c1b737d67b1`;
  $("#showed-informartion").html(
    `<div class="first-index-style">
      <div class="spider-neon"></div>
    </div>`);
  $.ajax({  
    type: "GET",
    url : urlTwo,
    success: loadComics,
    error, 
    crossDomain: true
  });
}
function loadComics (marvel2){
  marvelComic = marvel2.data.results;
  if (marvelComic.length === 0){
    let toShowComics = document.getElementById("showed-informartion");
    toShowComics.innerHTML = "Não existe essa personagem";
  } else {
    showComics();
  }
}
function showComics (){
  let toShowComics = document.getElementById("showed-informartion");
  toShowComics.innerHTML =
  `<div class="showed-characters-style d-flex flex-column align-items-center">${marvelComic.map(doc =>`
    <hr class="w-50">
    <div class="d-flex flex-column align-items-center">
      <h3>${doc.title}</h3>
      <img class="image-size" src="${doc.thumbnail.path}.jpg">
    </div>
    <div class="font-bai-jamburi">
      <p>Description: ${doc.description}</p>
      <p>Price: ${"$" + doc.prices[0].price}</p>
      <p>Creators:</p>
      <div>${doc.creators.items.map(data =>`<p>${data.name} - ${data.role}</p>`).join("")}</div>
    </div> `).join("")}
  </div>
  <hr class="w-50">`;
}
function error(){
  alert("Please write something in the input");
}
