  // const buttonSearch = $("#search");
  let marvelDoc;
  function putCharacters(){
    let inputSearch = $("#input-banana").val();
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${inputSearch}&ts=1&apikey=ca5c7c03b43ce92350960674d66548c2&hash=39840f36a0737bc4bf9e9c1b737d67b1`;
    $.ajax({
      type: "GET",
      url,
      success: loadCharacter,
      error, 
      crossDomain: true
    });
  }
  function error(){
    console.log("Erro");
  }
  function loadCharacter (marvel){
    marvelDoc = marvel.data.results;
    console.log(marvelDoc);
    if (marvelDoc === []){
      console.log("Não existe essa personagem");
    } else {
      showCharacters();
    }
    
  }
  function showCharacters (){
    let toShow = document.getElementById("showed-characters");
    toShow.innerHTML = `<div class="area-noticia">${marvelDoc.map(doc =>`
    <div class="noticia">
    <h3>${marvelDoc[0].name}</h3>
    <p>${marvelDoc[0].description}</p>
    <img src="${marvelDoc[0].thumbnail.path}.jpg">
    <p>Available Comics: ${marvelDoc[0].comics.available}</p>
    <p>Available Series: ${marvelDoc[0].series.available}</p>
    <p>Available Stories: ${marvelDoc[0].stories.available}</p>
    <p>Wanna see all your carachter comics? 
    <a href="${marvelDoc[0].urls[2].url}">Marvel Oficial Web Site</a>
    </div>`)
    .join("")}
    </div>`;
  }


// function blabla(){
//   buttonSearch.click((event)=>{
//     event.preventDefault();
//     const inputSearch = $("#input-banana").val();
//     const url = `https://gateway.marvel.com:443/v1/public/characters?name=${inputSearch}&ts=1&apikey=ca5c7c03b43ce92350960674d66548c2&hash=39840f36a0737bc4bf9e9c1b737d67b1`;
//     $.ajax({
//       type: "GET",
//       url,
//       success: loadCharacter,
//       error, 
//       crossDomain: true
//     });
//   });
// }
