
function changeColor(){
    let background=document.getElementById("body"); //küruere schreibweise um auf den body zu greifen 
    let newBackground=document.getElementById("inputfield").value; //kürzere Schreibweise den eingegebenen Wert zu greifen 
    console.log(newBackground); //zur überprüfung
    background.style.backgroundColor=newBackground;//hier wird der neue Wert angenommen 
}
