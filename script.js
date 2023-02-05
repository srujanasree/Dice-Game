'use strict'

let currentScore = 0 ;
let currentPlayer = 0;

const score = [0,0];

const rolldice = document.querySelector('.btn--roll');
const switchMessage = document.querySelector('.message--switch');
const hold = document.querySelector('.btn--hold');

const switchPlayer = function () {
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    document.querySelector(".player--0").classList.toggle('player--active');
    document.querySelector(".player--1").classList.toggle('player--active');
    currentPlayer = currentPlayer=== 0 ? 1 : 0;
    currentScore = 0;
    switchMessage.textContent=`PLAYER ${currentPlayer+1} TURN`;
};

const rollDice = function(){
    const dice=Math.floor(Math.random()*6)+1;
    switchMessage.textContent='';
    document.querySelector('.dice').src= `dice-${dice}.png`;
    if(dice != 1){
      currentScore += dice;
      document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
    } else {
        switchPlayer();   
    }  
};

rolldice .addEventListener('click', rollDice);

hold.addEventListener('click',function () {
    score[currentPlayer] += currentScore; 
    document.querySelector(`#score--${currentPlayer}`).textContent = score[currentPlayer];
    if (score[currentPlayer] >= 100) {
        rolldice.classList.add('hidden');
        hold.classList.add('hidden');
        switchMessage.textContent=`PLAYER ${currentPlayer+1} WON THE GAME`;

    }
    else{
        switchPlayer();
    }
});

document.querySelector('.btn--new').addEventListener('click',function () {
    currentScore = 0;
    score[0] = 0; score[1] = 0;
    document.querySelector(".player--0").classList.add('player--active');
    document.querySelector(".player--1").classList.remove('player--active');
    switchMessage.textContent=`PLAYER 1 TURN`;
    document.querySelector('.dice').src='dice-5.png';
    rolldice.classList.remove('hidden');
    hold.classList.remove('hidden');
    document.querySelector("#score--0").textContent=0;
    document.querySelector("#score--1").textContent=0;
});