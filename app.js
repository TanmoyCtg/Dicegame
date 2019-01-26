var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore =0;
activePlayer = 0; //the player currently playing save her point

dice = Math.floor(Math.random() * 6) +1;

document.querySelector('#current-'+ activePlayer).textContent = dice;

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';
