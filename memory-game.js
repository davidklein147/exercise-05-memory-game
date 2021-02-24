const sumCard = document.getElementById('sumCard');

document.getElementById('sumCard').addEventListener("keyup", setAry);
document.getElementById('sumCard').addEventListener("click", setAry);

var ary = new Array(sumCard.value * 2);
var _ary = new Array(ary.length);
const cards = document.getElementById('cards');
let card1;
let card2;

function setAry() {
    if (sumCard.value < 10 && sumCard.value != 0  ) {
        cards.innerHTML = `<div  class = "col text-center align-middle"> you need to choose a number more then ten </div>`;
    }
    else if(sumCard.value >= 10){
        cards.innerHTML = null
        let num = 0;
        for (let index = 0; num < sumCard.value; index += 2) {
            num++;
            ary[index] = num;
            ary[index + 1] = num;

        }
        console.log(ary.toString());

        let numb = sumCard.value * 2;
        for (let index = 0; index < sumCard.value * 2; index++) {

            let i = Math.floor(Math.random() * numb);
            _ary[index] = ary[i];
            ary.splice(i, 1);
            numb--;
        }

        for (let divIndex = 0; divIndex < _ary.length; divIndex++) {
            cards.innerHTML += `<div onClick = 'display(event)' class = "bek col-2 text-center align-middle  bekDisplay">${_ary[divIndex]}</div>`
            console.dir(cards)
        }

        document.getElementById('sumCard').removeEventListener("keyup", setAry);
        document.getElementById('sumCard').removeEventListener("click", setAry)
        console.log(_ary.toString());
        console.log(Math.floor(Math.random() * sumCard.value));
    }
}

function dis(collbeck) {
    setTimeout(() =>{ 
        if(card1 && card2 && card1 !== card2)  
         e.target.className = "bek col-2 text-center align-middle bekDisplay";
     },2*1000)
} 

function display(e){
    
    // debugger
    e.target.className = "bek col-2 text-center align-middle";
    if(card1 === undefined){
        card1 = e.target.innerHTML;
    } else {
        card2 = e.target.innerHTML; 
    }

    set( dis() ){

    }
    


    
    
       console.log( e); 
}






