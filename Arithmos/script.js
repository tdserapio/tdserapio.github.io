var sw;
var errors = 0;
var secsSoFar = 0;
var started = false;

function checkAnswer(n1, n2, op) {
    var ans = document.getElementById('answer').value;
    return op(n1, n2) == ans;
}

function checkQuestion() {
    var stuff = document.getElementById("equation").innerText;
    stuff = stuff.split(" ");
    var n1 = Number(stuff[0]);
    var n2 = Number(stuff[2])
    var op;

    if (stuff[1] == "+") { op = add; }
    if (stuff[1] == "-") { op = subtract; }
    if (stuff[1] == "x") { op = multiply; }
    if (stuff[1] == "÷") { op = divide; }

    if (checkAnswer(n1, n2, op)) {
        document.getElementById("equation").style.color = "rgb(36, 148, 36)";
        if (started) {
            var seconds = killStopWatch(sw).toFixed(1);
            alert("Seconds taken: " + seconds +
                "\nMistakes Made: " + errors);
            errors = 0;
        } else {
            started = true;
        }
        setTimeout(newQuestion, 500);

    } else {
        document.getElementById("equation").style.color = "orangered";
        setTimeout(() => { document.getElementById("equation").style.color = "black"; }, 500);
        errors++;
    }
}

function newQuestion() {
    var op = ["+", "-", "x", "÷"][Math.round(Math.random() * 3)];

    var s1 = [-1, 1][Math.round(Math.random())];
    var s2 = [-1, 1][Math.round(Math.random())];

    var n1 = Math.round(Math.random() * 1000) * s1;
    var n2 = Math.round(Math.random() * 1000) * s2;

    if (op == "÷") {
        while (n1 % n2 != 0) {
            n1 = Math.round(Math.random() * 1000);
            n2 = Math.round(Math.random() * 1000);
        }
    }

    sw = makeStopWatch();
    document.getElementById('answer').value = '';
    document.getElementById("equation").style.color = "black";
    document.getElementById("equation").innerText = n1 + ' ' + op + ' ' + n2;
}

const add = (a, b) => { return a + b };
const subtract = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const divide = (a, b) => { return a / b };

function makeStopWatch() {
    secsSoFar = 0;
    var interval = setInterval(function () { secsSoFar += 0.1; }, 100);
    return interval;
}

function killStopWatch(sw) {
    clearInterval(sw);
    return secsSoFar;
}

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        checkQuestion();
    }
    console.log(e.key);
});