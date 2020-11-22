var scores, roundScore, activePlayer, gamePlaying;

const init = () => {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    var name0 = prompt('Enter the name of player 1');
    var name1 = prompt('Enter the name of player 2');

    document.getElementById('name-0').textContent = name0;
    document.getElementById('name-1').textContent = name1;

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.add('active')
}

const nextPlayer = () => {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// Call init

document.querySelector('.btn-roll').addEventListener('click', () => {

    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1

        const diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = './assets/dice-' + dice + '.png';

        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
            nextPlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', () => {

    if(gamePlaying){
        scores[activePlayer] += roundScore
    }

    document.getElementsById('score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        document.querySelector('name-', +activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
    } else{
        nextPlayer()
    }
})

init();
document.querySelector('.btn-new').addEventListener('click', init);
