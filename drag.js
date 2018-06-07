var backgroundImg = ['../img/bg.jpg',
                     '../img/qr.png'
                    ]; //Add more backgrounds to the array
var backgroundCount = 0;

$(function() {
  $('full').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')'); //allows a variable for changing background img based in an array, change number in [] to change background...
});

$('#onClick').on('click', function(){
  backgroundCount++;
  if (backgroundCount > backgroundImg.length - 1) backgroundCount = 0;
  $('body').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')');
});

// set up text to print, each item in array is new line
var aText = new Array(
"Nekad je tesko naci rijeci,",
"jer onih pravih tako je malo,",
"a zar su uopste i potrebne", 
"da shvatis da mi je do tebe stalo!", 
"VOLIM TE NAJVISE, LJUBAVI MOJA"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();