$(document).ready(()=>{
  page("/", index);
  page('/characters', choosedChacarter);
  page('/comics', choosedComic);
  page();
  function index(){
    $("#showed-informartion").html(`<div class="first-index-style"><span class="site-phrase"><h2>Find your favorite characters and comics in the</h2><h2 class="site-phrase-marvel d-flex justify-content-center">Marvel's Universe!</h2></span>
    <div class="dared-evil"></div>
    </div>`); 
  }
  function choosedChacarter(){
    putCharacters();
  }
  function choosedComic(){
    putComics();
  }
});