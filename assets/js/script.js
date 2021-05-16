// variables
var counter = 75;

// questions array
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "2. curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned variables",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScrpit", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
];

// countdown begins after start button is clicked
document.getElementById("start-btn").addEventListener("click", function() {
    counter = 75;
    document.getElementById("counter").innerHTML = counter;

    countDown = setInterval(function() {
        counter--;
        document.getElementById("counter").innerHTML = counter;
        if (counter <= 0) {
            clearInterval(countDown);
        }
    }, 1000);
});