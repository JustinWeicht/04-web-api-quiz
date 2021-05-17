// variables
var counter = 75;
var i = -1; // -1 accounts for looping once when function is called

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

// countdown and questions begin after start button is clicked
document.getElementById("start-btn").addEventListener("click", function() {
    counter = 75;
    document.getElementById("counter").innerHTML = counter;

    countDown = setInterval(function() {
        counter--;
        document.getElementById("counter").innerHTML = counter;

        // stop counter and bring user to all done /submit section when countDown expires
        if (counter <= 0) {
            clearInterval(countDown);
            allDone();
        }
    }, 1000);
    // starts questions loop
    quizQuestions();
});

// all done! / submit score section
var allDone = function() {
    // converts the lime left into score
    var score = counter;
    clearInterval(countDown);

    var pageContent = `
        <h1 id="title">All Done!</h1>
        <p>Your final score is ` + score + `.</p>
        <form>
            <label for="name">Enter Initials: </label><input type="text" id="name" name="name"><input type="button" value="Submit">
        </form>`;

    var rightWrong = "";
    
    // changes content on the page with innerHTML
    document.getElementById("content").innerHTML = pageContent;

    // changes content of right-wrong with innerHTML
    document.getElementById("right-wrong").innerHTML = rightWrong;
};

var right = function() {
    var rightWrong = "Right";
    quizQuestions();
    

    // changes content on the page with innerHTML
    document.getElementById("right-wrong").innerHTML = rightWrong;
}

var wrong = function() {
    var rightWrong = "Wrong";
    counter -= 10;
    quizQuestions();

    

    // changes content on the page with innerHTML
    document.getElementById("right-wrong").innerHTML = rightWrong;
}

// loop for questions
var quizQuestions = function() {
    i++;

    if (i > questions.length - 1) {
        allDone();
        return;
    }

        // for loop for question
        var pageContent = "<h1 id='title'>" + questions[i].question + "</h1>"

        // for loop for choices within the question to creat buttons
        for (var j = 0; j < questions[i].choices.length; j++) {
            var userChoices = "<p><button onclick=\"[ANSWER]\">[CHOICE]</button></p>";
            userChoices = userChoices.replace("[CHOICE]", questions[i].choices[j]);

            // check if choice is right / wrong
            if (questions[i].choices[j] == questions[i].answer) {
                userChoices = userChoices.replace("[ANSWER]", "right()");
            } else {
                userChoices = userChoices.replace("[ANSWER]", "wrong()");
            }
            pageContent += userChoices;
        }    

    // changes content on the page with innerHTML
    document.getElementById("content").innerHTML = pageContent;
}