//BASKET DROPDOWN

var b = false;

function toggle_visibility(id) {
    var e = document.getElementById(id);
     if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    b = true;
}

function foo() {
    var e = document.getElementById('foo');
    if(!b) e.style.display = 'none';
    b=false;
}


//BASKET COUNTER

let counterDisplayElem = document.querySelector('.items');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};