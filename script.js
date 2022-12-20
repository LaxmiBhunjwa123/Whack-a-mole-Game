const squereDivs = document.querySelectorAll('.squere');
const startButton = document.querySelector('.start');
const level = document.querySelector('.difficulty');
const decreasingTime = document.querySelector('.decreasing-time');
const score = document.querySelector('.score');
const over = document.querySelector('.over');
const end = document.querySelector('.end');

let gameScore = 0;
let gameTime = 20;
let selectRandomeSquareTimer;
let decreaseTimeTimer;

squereDivs.forEach((squereDiv) => {
    squereDiv.onclick = () => {
       // console.log("id is ", squereDiv.classList.contains("mole-image"));
        if(squereDiv.classList.contains('mole-image')){
            gameScore = gameScore + 1 ;
            score.innerText = gameScore;
        }
    }
})

const selectRandomeSquare = () => {
    squereDivs.forEach((squereDiv) => {
        squereDiv.classList.remove('mole-image');
    })
    const randomSelectedDiv = squereDivs[Math.floor(Math.random()*9)]
    randomSelectedDiv.classList.add('mole-image')
}

const decreaseTime= () => {
    gameTime = gameTime - 1;
    decreasingTime.innerText = gameTime;
    if(gameTime === 0){
        clearInterval(selectRandomeSquareTimer);
        clearInterval(decreaseTimeTimer);
        over.innerText = 'Game Over'
        startButton.disabled = false;
        gameTime = 11;
    }
}

end.onclick = () => {
    clearInterval(selectRandomeSquareTimer);
    clearInterval(decreaseTimeTimer);
    over.innerText = 'Game Over';
    startButton.disabled = false;
    gameTime = 11;
}

startButton.onclick = () => {
    console.log(level.value);
    let intervalTime;
    if(level.value === 'easy'){
        intervalTime = 800;
    }else  if(level.value === 'medium'){
        intervalTime = 600;
    } else if(level.value === 'hard'){
        intervalTime = 400;
    }else{
        intervalTime = 800;
    }
    selectRandomeSquareTimer = setInterval(selectRandomeSquare, intervalTime)
    // console.log(intervalTime);
    // console.log(level.value);
    decreaseTimeTimer = setInterval(decreaseTime, 1000);
    // console.log('selectRandomeSquareTimer ', selectRandomeSquareTimer);
    // console.log('decreaseTimeTimer ', decreaseTimeTimer);
    startButton.disabled = true
    over.innerText = ''
}