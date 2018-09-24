function go () {
	window.timerId1 = window.setInterval(timer1, 1000);
	window.timerId2 = window.setInterval(timer2, 500);
}

function stop () {
	window.clearInterval(window.timerId1);
	window.clearInterval(window.timerId2);
}

function display () {
	var page1 = document.getElementById('start-page');
	var page2 = document.getElementById('game-page');
	page1.style.display = 'none';
	page2.style.display = 'block';
}

function display2 () {
	var page1 = document.getElementById('start-page');
	var page3 = document.getElementById('result-page');
	page1.style.display = 'block';
	page3.style.display = 'none';
	var timeRep = document.getElementById('time');
	var hitRep = document.getElementById('hit');
	var missRep = document.getElementById('miss');
	var pointRep = document.getElementById('point');
	timeRep.innerHTML = '60';
	hitRep.innerHTML ='0';
	missRep.innerHTML = '0';
	pointRep.innerHTML = '0';
}

function getRandom (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCircle () {
	var cr = document.createElement('div')
	var rWh = getRandom(10, 50);
	cr.style.width = rWh + 'px';
	cr.style.height = rWh + 'px';
	cr.style.background = 'url(img/' + getRandom(1, 5) + '.png) no-repeat center';
	cr.style.borderRadius = 50 + '%';
	cr.style.position = 'absolute';
	cr.style.top = getRandom(0, window.innerHeight - 50) + 'px';
	cr.style.left = getRandom(0, window.innerWidth - 50) + 'px';
	cr.className = 'circle';
	cr.addEventListener('click', clicked);
	document.body.appendChild(cr);
}

function timeRange () {
	var time = document.getElementById('time');
	var num = parseInt(time.innerHTML) - 1;
	time.innerHTML = num;
	if (num == 0) {
		stop();
		results();
		var page2 = document.getElementById('game-page');
		var page3 = document.getElementById('result-page');
		page2.style.display = 'none';
		page3.style.display = 'flex';
		var circles = document.getElementsByClassName('circle');

		var elementsToRemove = [];
		for (var i = 0; i < circles.length; i++) {
    		if (circles[i].className == "circle") {
        		elementsToRemove.push(circles[i]);
    		}
		}
		for(var j = 0; j < elementsToRemove.length; j++) {
    		elementsToRemove[j].parentNode.removeChild(elementsToRemove[j]);
		}
	}
}

function timer1 () {
	timeRange();
}

function timer2 () {
	createCircle();
}

function clicked () {
	removeCircle();
	counter();
	points();
}

function points () {
	var point = document.getElementById('point');
	if (parseInt(event.target.style.width) >= 10 && parseInt(event.target.style.width) < 20) {
		point.innerHTML = parseInt(point.innerHTML) + 4;
	}
	if (parseInt(event.target.style.width) >= 20 && parseInt(event.target.style.width) < 30) {
		point.innerHTML = parseInt(point.innerHTML) + 3;
	}
	if (parseInt(event.target.style.width) >= 30 && parseInt(event.target.style.width) < 40) {
		point.innerHTML = parseInt(point.innerHTML) + 2;
	}
	if (parseInt(event.target.style.width) >= 40 && parseInt(event.target.style.width) < 50) {
		point.innerHTML = parseInt(point.innerHTML) + 1;
	}
}

function counter () {
	var hit = document.getElementById('hit');
	hit.innerHTML = parseInt(hit.innerHTML) + 1;
}

function removeCircle () {
	document.body.removeChild(event.target);
}

var gamePage = document.getElementById('game-page');
gamePage.addEventListener('click', miss);

function miss() {
	var missed = document.getElementById('miss');
	var point = document.getElementById('point');
	missed.innerHTML = parseInt(missed.innerHTML) + 1;
	point.innerHTML = parseInt(point.innerHTML) - 1;
}

function results () {
	var startName = document.getElementById('input-name');
	var resultName = document.getElementById('user-name');
	resultName.innerHTML = startName.value;
	var gameHit = document.getElementById('hit');
	var resultHit = document.getElementById('result-hit')
	resultHit.innerHTML = gameHit.innerHTML;
	var gameMiss = document.getElementById('miss');
	var resultMiss = document.getElementById('result-miss');
	resultMiss.innerHTML = gameMiss.innerHTML;
	var gamePoint = document.getElementById('point');
	var resultPoint = document.getElementById('result-point');
	resultPoint.innerHTML = gamePoint.innerHTML;
}


