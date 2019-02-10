var scores, roundScore, activePlayer, dice, gamePlaying;
init();


// action listener for roll dice button
document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gamePlaying){
        // 1. Random number 
        dice = Math.floor(Math.random() * 6) +1;
        // 2.Display the result
        var diceDom = document.querySelector('.dice');
    
        diceDom.style.display = 'block';
        diceDom.src= 'dice-'+dice +'.png';

        // 3. Update the roundscore IF the rolled number was Not a 1
        if (dice != 1){
            roundScore += dice
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }else{
            // ternary operator if the activePlayer === 0 print activePlayer=1 else activePlayer=0
            activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').toggle('active');
            document.querySelector('.player-1-panel').toggle('active');

            document.querySelector('.dice').style.display = 'none';

        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        // Add current score to GLOBAL score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer]>=20){
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        }
        else{
            //Next Player
            nextPlayer();
        }

    }
 
});

function nextPlayer(){
    // ternary operator if the activePlayer === 0 print activePlayer=1 else activePlayer=0
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

// when new game button clicked this Events run
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore =0;
    activePlayer = 0; //the player currently playing save her point
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}