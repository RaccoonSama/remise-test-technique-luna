var text1 = document.getElementById("txt1"); //search for the text1
var innerTxt1 = text1.innerHTML; // save the value of the innerHTML
var text2 = document.getElementById("txt2"); //search for the text2
var innerTxt2 = text2.innerHTML;// save the value of the innerHTML
var button = document.getElementById('switch'); //search for the button with the id switch

var isSwitch = false; // was the text switched ? (no it wasnt, at least not yet...)

button.addEventListener('click',()=> {
  if (!isSwitch) {// if the text wasnt switched
    text1.innerHTML = innerTxt2;//the  innerHTML of text1 becomes the one of the text2
    text2.innerHTML = innerTxt1;//vis-versa
    isSwitch = true;// the text was switched
  }
  else {//else
    text1.innerHTML = innerTxt1;//the innerHTML of the text1 return to its original value
    text2.innerHTML = innerTxt2;// same here but for text2
    isSwitch = false;
  }
})

