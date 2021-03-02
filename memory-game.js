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
let ouers = 0;
let minit = 0;
let secnce = 0;
document.getElementById("time").innerHTML = `${ouers}:${minit}${secnce} <span  class="material-icons m-2" style="font-size: medium; display: contents;" >
play_arrow
</span>`;



function setAry() {

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
        startTime();
    }
}

function startTime() {
    setTimeout(() => {
        setInterval(() => {
            if (secnce <= 8) {
                secnce++
            } else {
                secnce = 0;
                if (minit <= 4) {
                    minit++
                } else {
                    minit++
                    minit = 0;
                    ouers++;
                }
            }
            document.getElementById("time").innerHTML = `${ouers}:${minit}${secnce}<span onClick = "stoPlay()"  class="material-icons m-2" style="font-size: medium; display: contents;" >
            play_arrow
            </span>`;
        }, 1000);
    }, 2 * 1000)
}

// function stoPlay() {
//     if()
    
// }

function display(e) {

    if (card1 && card2) {

    } else {
        e.target.innerHTML = _ary[+e.target.id];
        e.target.className = "bek col-1 text-center align-middle";
        if (card1 === undefined) {
            card1 = e.target.innerHTML;
            id1 = e.target.id;
        } else if (e.target.id !== id1) {
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

                finish++;
                console.log(sumCard.value)
                if (finish == sumCard.value) {
                    setTimeout(() => {
                        cards.innerHTML = `<h3  class = "col text-center align-middle"> game is finished succefully in ${steps} steps <br>
                    for new game input a number for card's number above the page and press start game   </h3>`
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











