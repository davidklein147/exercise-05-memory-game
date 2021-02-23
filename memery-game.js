const sumCard = document.getElementById('sumCard');

document.getElementById('sumCard').addEventListener("click", sum);


function sum() {
    console.log(Math.floor(Math.random() * sumCard.value));
}




