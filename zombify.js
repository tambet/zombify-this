var zombieCount = 0;
var zombiesToCreate = 0;
var score = 0;
var scoreDiv;
var end = false;
var zombiesHolderDiv;

function create() {
	zombiesHolderDiv = document.createElement('div');
	zombiesHolderDiv.setAttribute('id', 'zombies');
	document.body.appendChild(zombiesHolderDiv);
	addScoreBoard();
	addZombie();
}

function gameOver() {
	end = true;
	alert("GAME OVER! YOU KILLED " + score + " ZOMBIES BEFORE BECOMING ZOMBIEFOOD!");
	scoreDiv.parentNode.removeChild(scoreDiv);
	zombiesHolderDiv.parentNode.removeChild(zombiesHolderDiv);
}

function random(min,max) {
	return Math.ceil((min*1000)+(Math.random()*(max*1000)));
}

function addScore() {
	zombiesToCreate++;
	zombieCount--;
	score++;
	scoreDiv.innerHTML = "ZOMBIES KILLED: " + score;
}

function addScoreBoard() {
	scoreDiv = document.createElement('div');
	scoreDiv.setAttribute('id', 'scoreboard');
	scoreDiv.innerHTML = "ZOMBIES KILLED: 0";
	document.body.appendChild(scoreDiv);
}

function addZombie() {
	if (end) return;
	var div = document.createElement('div');
	div.setAttribute('class', 'zombie-' + Math.round(Math.random()));

	div.addEventListener('click', function (e) {
		div.parentNode.removeChild(div);
		addScore();
		window.setTimeout(addZombie, random(1, 3));
	});

	zombiesHolderDiv.appendChild(div);
	if (zombiesToCreate > 0) {
		zombiesToCreate--;
		window.setTimeout(addZombie, random(2, 5));
	}

	zombieCount++;
	if (zombieCount > 20 ) gameOver()
}

create();
