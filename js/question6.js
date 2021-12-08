var datas = document.querySelectorAll('#Lorem *:not(:first-child, p)');// search for the all the child element of the #lorem parent beside the p and the first child
var titles = document.querySelectorAll('#Lorem *:not(:first-child, p) h1,#Lorem *:not(:first-child, p) h2 ');// search for the h1 and h2 element of the #lorem parent
var para = document.querySelectorAll('#Lorem p'); // search for the p element of the #lorem parent
for (let i = 0; i < titles.length; i++) { // for all the titles ( h1 and h2)
    titles[i].addEventListener('click', ()=> {// add an event listener on every titles
       
        para[i].style.color =  datas[i].dataset.colour; // define the color of the p elements depending on the corresponding value of the dataset of the data parent
    })
    
}
