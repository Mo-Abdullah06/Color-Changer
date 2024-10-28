// function create random

function random(){
   let letter = "0123456789ABCDEF" 
   let code = "#";
   for( let i=0; i < 6; i++){
      code += letter[Math.floor(Math.random() * 16)]
   }
   return code;
}
function clickme(){
    let newcode = random();
    document.body.style.backgroundColor = newcode;
    document.querySelector(".code1").innerHTML = newcode
    document.querySelector(".changer").style.backgroundColor = newcode
}


