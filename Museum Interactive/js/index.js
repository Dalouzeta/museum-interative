let museum = new Museum();
museum.initializeGallery();

const artPieces = museum.getPieces();


function showInfoByClickButton(){
  alert( artPieces[0].getDescription() )

};

function showInfoByClickButton1(){
  alert( artPieces[1].getDescription() )
};

function showInfoByClickButton2(){
  alert( artPieces[2].getDescription() )
};

function showInfoByClickButton3(){
  alert( artPieces[3].getDescription() )
  Element.addEventListener("click",showInfoByClickButton3)
};
  

function showInfoByClickButton4(){
  alert( artPieces[4].getDescription() )
};

function showInfoByClickButton5(){
  alert( artPieces[5].getDescription() )
};

let btnInfo = document.getElementById('boton');
btnInfo.addEventListener('click',saludo);


//this is an example of the use of the setter in the description
/*function changeInfo(){
  artPieces[0].setDescription("esta es la nueva descripción");
} */



