$(document).ready(()=>{
    page("/", index);
    page('/characters', choosedChacarter);
    page();

    function index(){
        return document.getElementById("showed-characters").innerHTML = `<p>oi</p>`;
    }
    function choosedChacarter(){
        // bananinha();
        putCharacters();
        // return document.getElementById("showed-characters").innerHTML = `<p>que cocozão</p>`;
    }
});