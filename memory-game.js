const sumCard = document.getElementById('sumCard');
const bottenSumCard = document.getElementById("bottenSumCard")

// sumCard.addEventListener("keyup", setAry);
bottenSumCard.addEventListener("click", setAry);

var ary = new Array(sumCard.value * 2);
var _ary = new Array(ary.length);
const cards = document.getElementById('cards');

let id1;
let card1;
let card2;
let finish = 0;
let steps = 0;

function setAry() {
    debugger
    if (sumCard.value < 10 && sumCard.value != 0) {
        cards.innerHTML = `<h3  class = "col text-center align-middle"> you need to choose a min-number of ten </h3>`;
    }
    else if (sumCard.value >= 10) {
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

        for (let divIndex = 0; divIndex < sumCard.value * 2; divIndex++) {
            cards.innerHTML += `<div onClick = 'display(event)' id = '${divIndex}' class = "bek col-1 text-center align-middle "></div>`
            console.dir(cards)
        }

        // document.getElementById('sumCard').removeEventListener("keyup", setAry);
        // document.getElementById('sumCard').removeEventListener("click", setAry)
        console.log(_ary.toString());
        console.log(Math.floor(Math.random() * sumCard.value));
        sumCard.blur();
    }
}

function display(e) {

    if (card1 && card2) {

    } else {
        e.target.innerHTML = _ary[+e.target.id]; 
        e.target.className = "bek col-1 text-center align-middle";
        if (card1 === undefined) {
            card1 = e.target.innerHTML;
            id1 = e.target.id;
        } else {
            card2 = e.target.innerHTML;
            steps++;
            let id2 = e.target.id;
            if (card1 !== card2) {
                setTimeout(() => {
                    document.getElementById(id1).innerHTML = " ";
                    document.getElementById(id2).innerHTML = " ";
                    card1 = undefined;
                    id1 = undefined;
                    card2 = undefined;
                    id2 = undefined;
                    
                }, 1 * 1000)
            } else {
                card1 = undefined;
                id1 = undefined;
                card2 = undefined;
                id2 = undefined;

                finish += 2;
                console.log(sumCard.value)
                if (finish == sumCard.value * 2) {
                    setTimeout(() => {
                        cards.innerHTML = `<h3  class = "col text-center align-middle"> game is finished succefully in ${steps} steps <br>
                    for new game input a number for card's number above the page and press the botten   </h3>`
                    }, 2 * 1000)


                    // document.getElementById('sumCard').addEventListener("keyup", setAry);
                    // document.getElementById('sumCard').addEventListener("click", setAry);
                }
            }
        }
    }
}




// function dis(collbeck) {

// }

// function display(e) {
//     // debugger
//     e.target.className = "bek col-2 text-center align-middle";
//     if (card1 === undefined) {
//         card1 = e.target.innerHTML;
//         dis((card2) => {
//             setTimeout(() => {
//                 if (card1 !== card2)
//                     e.target.className = "bek col-2 text-center align-middle bekDisplay";
//                     delete card1;
//             }, 2 * 1000)
//         })
//     } else {
//         card2 = e.target.innerHTML;
//     }
// }











