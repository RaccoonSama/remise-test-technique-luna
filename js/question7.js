
///////////////////////////////////////////////////////////////////////////

//                  PART 1 welcome function

////////////////////////////////////////////////////////////////////////////

hello_world('welcome'); // call hello world with the parameter welcome

function hello_world(name = 'ipsum') {
    const $name = $('.' + name); //search for the class with the name inputed
    console.log(name + ': ' + $name.data('hello')); // print welcome plus the name in the console
}

///////////////////////////////////////////////////////////////////////////

//                  PART 2 num function

////////////////////////////////////////////////////////////////////////////


var contentNum = (rowNum) => {
    var dolor = 'dolor'; // define what dolor is
    var val = $('[data-' + dolor + ']').data(dolor); // search for the data value of dolor in the html
    return `<p>Result [${rowNum}]: ${rowNum * val}</p>`; // return the original value and the value multiplied by the valye of data-dolor in the html
};



const containerDiv = $('#mine'); // search for the div with the id mine
containerDiv.html(contentNum(123456)); // change the Div html content to what contentNum returns with the value 123456

const contentP = $('#mine p'); // search for the returned P component

containerDiv.on('click', () => { // if you click on the div
    contentP.css('color', 'red'); // change de color of the content of p to red
});


///////////////////////////////////////////////////////////////////////////

//                  PART 3 object define

////////////////////////////////////////////////////////////////////////////

let valueObj = { // define the object valueObj
    val1: '1', //define x
    val2: '2' //define y
};

console.log(valueObj.val1 == 1 && valueObj.val2 == 2 ? 'yeah' : 'boo'); // print the result repending on the value of val1 and val2