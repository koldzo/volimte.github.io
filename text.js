var bText = new Array(
"Za moju Ajlu ",

);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = bText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter2()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext2");
 
 while ( iRow < iIndex ) {
  sContents += bText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + bText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != bText.length ) {
   iArrLength = bText[iIndex].length;
   setTimeout("typewriter2()", 500);
  }
 } else {
  setTimeout("typewriter2()", iSpeed);
 }
}


typewriter2();