var countCorrectAdd = 0;
var countIncorrectAdd = 0;

// Case 1
var wrongOne = document.getElementById("wrongOne");
var wrongTwo = document.getElementById("wrongTwo");
var whoDoneItOne = document.getElementById("whoDoneItOne");

// Case 2
//var wrongThree = document.getElementById("wrongThree");
//var wrongFour = document.getElementById("wrongFour");
//var whoDoneItTwo = document.getElementById("whoDoneItTwo");


// Case 3
//var wrongFive = document.getElementById("wrongFive");
//var wrongSix = document.getElementById("wrongSix");
//var whoDoneItThree = document.getElementById("whoDoneItThree");


var result = document.getElementById("result").innerHTML;


function countCorrect() {
    countCorrectAdd = countCorrectAdd + 1;
    updateResult();
}

function countIncorrect(){
    countIncorrectAdd = countIncorrectAdd + 1;
    updateResult();
}

function updateResult() {
    if(countIncorrectAdd == 1 && countCorrectAdd == 0) {
        document.getElementById("result").innerHTML = "You are wrong! You get one more guess. Reaaaally think about it...";
    }
    else if(countIncorrectAdd == 2 && countCorrectAdd == 0){
        document.getElementById("result").innerHTML = "You are wrong again! The person who committed the crime got away. Complete the other case files and then retire";
        restart();
    }
    else if (countCorrectAdd == 1 && countIncorrectAdd < 2) {
        document.getElementById("result").innerHTML = "You are correct! Complete the other case files and then retire!"
        restart();
    }
}

function restart() {
    console.log("count is restarted");
    countCorrect = 0;
    countIncorrect = 0;
}


// Case 1
whoDoneItOne.addEventListener("click", countCorrect);
wrongOne.addEventListener("click", countIncorrect);
wrongTwo.addEventListener("click", countIncorrect);

// Case 2
//whoDoneItTwo.addEventListener("click", countCorrect);
//wrongThree.addEventListener("click", countIncorrect);
//wrongFour.addEventListener("click", countIncorrect);

// Case 3
//whoDoneItThree.addEventListener("click", countCorrect);
//wrongFive.addEventListener("click", countIncorrect);
//wrongSix.addEventListener("click", countIncorrect);