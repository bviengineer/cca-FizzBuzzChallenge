//--Fizz Buzz Pair Challenge: Cynthia & Kaisma
var userClick = document.getElementById("user-click"),
    clearOutput = document.getElementById("clear-output"),
    displayArea = document.getElementById("display-area");

    userClick.addEventListener("click", function() {
        for(i = 1; i <= 100; i++) {
            if(i % 3 === 0) {
                displayArea.innerText += "Fizz! " + i + "\n";
            } else if(i % 5 === 0) {
                displayArea.innerText += "Buzz! " + i + "\n";
            } else {
                displayArea.innerText += i + "\n";
            }
        }         
    });

    clearOutput.addEventListener("click", function() {
        displayArea.innerText = "";
    });
