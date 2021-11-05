var input = document.getElementById("result");
var insertTask = document.getElementById("operation");
var checkTest = document.getElementById("checkTest");
var audioWrong = new Audio("./sound/wrong.mp3");
var audioRight = new Audio("./sound/explode.mp3");
var upCounter = document.getElementById("up-counter");
var downCounter = document.getElementById("dwn-counter");
let upCount = 0;
let downCount = 0;
var result = null;
var testRes = null;
window.onload = function() {
    downCounter.innerText = downCount;
    upCounter.innerText = upCount;
    let a = insertOperation();
    insertTask.innerText = a.operation;
    result = a.difference;
    testRes = a.subtrahend;
}

function insertOperation() {
    var minuend = Math.ceil(Math.random() * 100);
    var subtrahend = Math.ceil(Math.random() * minuend);
    var operation = `${minuend} - ${subtrahend} =`;
    var difference = minuend - subtrahend;
    testRes = subtrahend;
    return {
        operation: operation,
        subtrahend: subtrahend,
        difference: difference,
    }
}

input.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        checkAnswer();
    }
});

function checkAnswer() {
    if(input.value == result) {
        checkTest.innerText = "";
        upCount++;
        upCounter.innerText = upCount;
        audioRight.play();
        setTimeout(() => {
            input.value = "";
            let a = insertOperation();
        insertTask.innerText = a.operation;
        result = a.difference;
        },2000);
    } else {
        checkTest.innerText = `Provera: ${input.value} + ${testRes} = ${parseInt(input.value) + testRes}`;
        setTimeout(() => input.value ="",2000);
        downCount++;
        downCounter.innerText = downCount;
        audioWrong.play();
    }
}
/**
 * ide u minus
 * NaN
 * ograniciti unos length =<3
 */