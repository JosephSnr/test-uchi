'use strict'

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function drawArc(xStart, number, height) {
  ctx.moveTo(39 * xStart, 100);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 2;
  ctx.quadraticCurveTo(19.5 * (2 * xStart + number), height, 39 * (number + xStart), 100);
  ctx.lineTo(39 * (number + xStart) - 3, 90);
  ctx.moveTo(39 * (number + xStart), 100);
  ctx.lineTo(39 * (number + xStart) - 10, 100 - 3);
  ctx.stroke();
}

function show(e) {
  e.style.visibility = 'visible';
}

function hide(e) {
  e.style.visibility = 'hidden';
}

function markup() {
  firstInput.style.left = 19.5 * a + 39 + 'px';
  secondInput.style.left = 19.5 * (2 * a + b) + 20 + 'px';
  firstAnswer.style.left = 19.5 * a + 39 + 'px';
  secondAnswer.style.left = 19.5 * (2 * a + b) + 39 + 'px';
}

var myCanvas = document.getElementById("myCanvas");
var  ctx = myCanvas.getContext('2d');

//Определение условия
var a =  randomInteger(6, 9);
var b = randomInteger(11, 14) - a;

//Инициализация и определение примера
var task = document.querySelector('.task');
task.innerHTML = "<p> <span class='firstTerm'>" + a + "</span>" + " + <span class='secondTerm'>" + b +
"</span>= ?</p> <input class='solution' maxlength='2'></input>";
var firstTerm = document.querySelector('.firstTerm');
var secondTerm = document.querySelector('.secondTerm');
var solution = document.querySelector('.solution');
var final = document.querySelector('.final');
final.innerHTML = "<p>" + a + " + " + b + " = " + (a + b) + "</p>"

//Инициализация группы инпутов + Первый инпут + Второй инпут (спрятан)
var inputs = document.querySelector('.inputs');
inputs.innerHTML = "<input class='firstInput' maxlength='1'></input> <input class='secondInput' maxlength='1'></input>";
var firstInput = document.querySelector('.firstInput');
var secondInput = document.querySelector('.secondInput');

//Инициалицация группы ответов + Первый ответ (спрятан) + Второй ответ (спрятан)
var answers = document.querySelector('.answers');
answers.innerHTML = "<p class='firstAnswer'>" + a + "</p> <p class='secondAnswer'>" + b + "</p>";
var firstAnswer = document.querySelector('.firstAnswer');
var secondAnswer = document.querySelector('.secondAnswer');



drawArc(0, a, -30);

markup();

firstInput.addEventListener('change', function() {
  if (firstInput.value != a) {
    firstInput.style.color = 'red'
    firstTerm.style.backgroundColor = 'yellow';
  } else {

    firstTerm.style.backgroundColor = 'white';
    hide(firstInput);

    show(firstAnswer);

    drawArc(a, b, 30);

    show(secondInput);
  }
});

secondInput.addEventListener('change', function() {
  if (Number(secondInput.value) !== b) {
    secondInput.style.color = 'red';
    secondTerm.style.backgroundColor = 'yellow';
  } else {
    secondTerm.style.backgroundColor = 'white';
    hide(secondInput);

    show(secondAnswer);

    show(solution);
  }
});

solution.addEventListener('change', function() {
  if (Number(solution.value) !== (a + b)) {
    solution.style.color = 'red';
  } else {
    hide(solution);
    hide(task);
    show(final);
  }
});
