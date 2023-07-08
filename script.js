const button = document.querySelector("button");
const body = document.querySelector("body");
//color array list
const colorList = ["#FF78C4","#E1AEFF","#FFBDF7","#FFECEC","#F24C3D","#F24C3D","#22A699","#F2BE22","#A0C49D","#9BCDD2",
"#068FFF","#FF78C4","#FDFFAE","#EF6262","#F3AA60","#CCEEBC","#9575DE","#6554AF","#E966A0","#F86F03","#525FE1","#84A7A1"];


//add event
button.addEventListener('click', changeColor);

//color change function
function changeColor()
{
 var currentColor = colorList.length;   
 //select random color index
 var randColor = parseInt(Math.random()*currentColor);
 body.style.backgroundColor =colorList[randColor];
  

}




