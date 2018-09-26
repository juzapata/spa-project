$(document).ready(()=>{
  const buttonSearch = $("#search");
  const inputSearch = $("#input-banana");
  console.log(inputSearch.val());
  buttonSearch.click((event)=>{
    event.preventDefault();
    const inputSearch = $("#input-banana").val();
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${inputSearch}&ts=1&apikey=ca5c7c03b43ce92350960674d66548c2&hash=39840f36a0737bc4bf9e9c1b737d67b1`;
    $.ajax({
      type: "GET",
      url,
      success: loadComics,
      error, 
      crossDomain: true
    });
  });
  function error(){
    console.log("Vishi! Que merda hein");
  }
  function loadComics (marvel){
    console.log(marvel.data.results); 
  }
});
