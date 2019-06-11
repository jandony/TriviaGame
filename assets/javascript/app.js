// # TriviaGame

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// The scenario is similar for wrong answers and time-outs.


// If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
// After a few seconds, display the next question -- do this without user input.

// If the player runs out of time, tell the player that time's up and display the correct answer. 
// Wait a few seconds, then show the next question.

// If the player chooses the wrong answer, tell the player they selected the wrong option
// then display the correct answer. 
// Wait a few seconds, then show the next question.


// On the final screen
// show the number of correct answers
// show incorrect answers
// show an option to restart the game (without reloading the page).


// Variables

var timer;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = ["What color is the sky?",
    "How many sides to a dice?",
    "How many days are in February?",
    "What flavor is vanilla ice cream?",
    "How many days are in one year?"
];

var answers = ["blue", "6", "28", "vanilla", "365"];

var q1Choices = ["blue", "green", "red", "purple"];
var q2Choices = ["2", "4", "5", "6"];
var q3Choices = ["30", "31", "27", "28"];
var q4Choices = ["chocolate", "milk", "vanilla", "white"];
var q5Choices = ["300", "365", "395", "420"];


// Functions

// Countdown Timer function
function setTimer() {
    intervalId = setInterval(decrement, 1000);
    timer = 30;

    function decrement() {
        timer--; // does not show on page just yet!

        function stop() {
            clearInterval(intervalId); // clears the interval of variable intervalidID
        }

        $("#timer").text(timer); // now this shows up on the page once we apply a jquery .html method
        if (timer === 0) {
            stop();

            // display time's up message
            $("#triviaQuestion").hide();
            $("#outOfTimeMessage").fadeIn();

            // add 1 point to #unanswered
            unanswered++;
            $("#unanswered").text(unanswered);

            // call next question
            setTimeout(function () {
                $("#triviaQuestion").fadeIn();
                $("#outOfTimeMessage").hide();
            }, 3000);
        }
    }
}

// resetTimer function
function resetTimer() {
    timer = 30;
    $("#timer").text(timer);
}

// The Game (calling functions)

function callQuestion1() {
    // display question 1
    $("#triviaQuestion").fadeIn();
    $("#question").text(questions[0]);

    // display answers for question 1
    for (var i = 0; i < q1Choices.length; i++) {
        var button = $("<button>");
        button.text(q1Choices[i]);
        button.val(q1Choices[i]);
        $("#answers").append(button);
    }
    setTimer();

    // on button click
    $("button").on("click", (function () {
        var choice = $(this).val();
        // if answer is true, false, or time is up
        if (choice === answers[0]) {
            // display correct message
            $("#triviaQuestion").hide();
            $("#rightAnswerMessage").fadeIn();
            // add 1 point to #correctanswer
            correctAnswers++;
            $("#correctAnswers").text(correctAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#rightAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion2();
            }, 3000);
        } else {
            // display you suck message
            $("#triviaQuestion").hide();
            $("#wrongAnswerMessage").fadeIn();
            // add 1 point to #wronganswer
            incorrectAnswers++;
            $("#incorrectAnswers").text(incorrectAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#wrongAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion2();
            }, 3000);
        }
    }));
}

function callQuestion2() {
    // display question 2
    $("#triviaQuestion").fadeIn();
    $("#question").text(questions[1]);

    // display answers for question 2
    for (var i = 0; i < q2Choices.length; i++) {
        var button = $("<button>");
        button.text(q2Choices[i]);
        button.val(q2Choices[i]);
        $("#answers").append(button);
    }

    // on button click
    $("button").on("click", (function () {
        var choice = $(this).val();
        console.log(choice);
        // if answer is true, false, or time is up
        if (choice === answers[1]) {
            // display correct message
            $("#triviaQuestion").hide();
            $("#rightAnswerMessage").fadeIn();
            // add 1 point to #correctanswer
            correctAnswers++;
            $("#correctAnswers").text(correctAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#rightAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion3();
            }, 3000);
        } else {
            // display you suck message
            $("#triviaQuestion").hide();
            $("#wrongAnswerMessage").fadeIn();
            // add 1 point to #wronganswer
            incorrectAnswers++;
            $("#incorrectAnswers").text(incorrectAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#wrongAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion3();
            }, 3000);
        }
    }));
}

function callQuestion3() {
    // display question 3
    $("#triviaQuestion").fadeIn();
    $("#question").text(questions[2]);

    // display answers for question 3
    for (var i = 0; i < q3Choices.length; i++) {
        var button = $("<button>");
        button.text(q3Choices[i]);
        button.val(q3Choices[i]);
        $("#answers").append(button);
    }

    // on button click
    $("button").on("click", (function () {
        var choice = $(this).val();
        console.log(choice);
        // if answer is true, false, or time is up
        if (choice === answers[2]) {
            // display correct message
            $("#triviaQuestion").hide();
            $("#rightAnswerMessage").fadeIn();
            // add 1 point to #correctanswer
            correctAnswers++;
            $("#correctAnswers").text(correctAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#rightAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion4();
            }, 3000);
        } else {
            // display you suck message
            $("#triviaQuestion").hide();
            $("#wrongAnswerMessage").fadeIn();
            // add 1 point to #wronganswer
            incorrectAnswers++;
            $("#incorrectAnswers").text(incorrectAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#wrongAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion4();
            }, 3000);
        }
    }));
}

function callQuestion4() {
    // display question 4
    $("#triviaQuestion").fadeIn();
    $("#question").text(questions[3]);

    // display answers for question 4
    for (var i = 0; i < q4Choices.length; i++) {
        var button = $("<button>");
        button.text(q4Choices[i]);
        button.val(q4Choices[i]);
        $("#answers").append(button);
    }

    // on button click
    $("button").on("click", (function () {
        var choice = $(this).val();
        console.log(choice);
        // if answer is true, false, or time is up
        if (choice === answers[3]) {
            // display correct message
            $("#triviaQuestion").hide();
            $("#rightAnswerMessage").fadeIn();
            // add 1 point to #correctanswer
            correctAnswers++;
            $("#correctAnswers").text(correctAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#rightAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion5();
            }, 3000);
        } else {
            // display you suck message
            $("#triviaQuestion").hide();
            $("#wrongAnswerMessage").fadeIn();
            // add 1 point to #wronganswer
            incorrectAnswers++;
            $("#incorrectAnswers").text(incorrectAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#wrongAnswerMessage").hide();
                $("#answers").empty();
                // reset timer
                resetTimer();
                // call next question
                callQuestion5();
            }, 3000);
        }
    }));
}

function callQuestion5() {
    // display question 5
    $("#triviaQuestion").fadeIn();
    $("#question").text(questions[4]);

    // display answers for question 5
    for (var i = 0; i < q5Choices.length; i++) {
        var button = $("<button>");
        button.text(q5Choices[i]);
        button.val(q5Choices[i]);
        $("#answers").append(button);
    }

    // on button click
    $("button").on("click", (function () {
        var choice = $(this).val();
        console.log(choice);
        // if answer is true, false, or time is up
        if (choice === answers[4]) {
            // display correct message
            $("#triviaQuestion").hide();
            $("#rightAnswerMessage").fadeIn();
            // add 1 point to #correctanswer
            correctAnswers++;
            $("#correctAnswers").text(correctAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#rightAnswerMessage").hide();
                $("#answers").empty();
                // call next question
                showResults();
            }, 3000);
        } else {
            // display you suck message
            $("#triviaQuestion").hide();
            $("#wrongAnswerMessage").fadeIn();
            // add 1 point to #wronganswer
            incorrectAnswers++;
            $("#incorrectAnswers").text(incorrectAnswers);
            // reset timer & call next question
            setTimeout(function () {
                $("#wrongAnswerMessage").hide();
                $("#answers").empty();
                // call next question
                showResults();
            }, 3000);
        }
    }));
}

function showResults() {
    // display results
    $("#resultsPage").fadeIn();    
}

// Enter Game function
function game() {
    $("#play").click(function () {
        $("#instructions").hide();

        callQuestion1();
    });
}

// Call Game Function
game();