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
    // var page1 = $("#page1").hide();
    // var page2;
    // var page3;
    // var page4;
    var timer = 30;
    var intervalId;

    var questions = ["What color is the sky?",
        "How many sides to a dice?",
        "How many days are in February?",
        "What flavor is vanilla ice cream?",
        "How many days are in one year?" ];

    var correctAnswers = ["blue", "six", "28", "vanilla", "365"];

    var q1Choices = ["blue", "green", "red", "purple"];
    var q2Choices = ["2", "4", "5", "6"];
    var q3Choices = ["30", "31", "27", "28"];
    var q4Choices = ["chocolate", "milk", "vanilla", "white"];
    var q5Choices = ["300", "365", "395", "420"];


// Functions

    // Timer function
    function setTimer() {
        intervalId = setInterval(decrement, 1000);
        
        function decrement() {
            timer--; // does not show on page just yet!
            
            $("#timer").text(timer); // now this shows up on the page once we apply a jquery .html method
            if (timer === 0) {
                stop();
                alert("Time's Up!");
            } 
        }
            
        function stop() {
            clearInterval(intervalId); // clears the interval of variable intervalidID
        }    
    }
    
    // The Game (calling functions)

        // Enter Game function
        function Game() {
            $("#play").click(function() {
                $("#instructions").hide();
                $("#triviaQuestion").fadeIn();

                // loop each question
                for (var i = 0; i < questions.length; i++) {

                    // display question
                    $("#question").text(questions[i]);
                    
                    // display answers
                    for (var i = 0; i < q1Choices.length; i++) {
                        var button = $("<button>");
                        button.text(q1Choices[i]);
                        button.val(q1Choices[i]);
                        $("#answers").append(button);
                        // console.log(q1Choices[i]);
                    }
                    
                    // Check Answer function (check if answer is right or wrong)
                        // if answer is correct, display CORRECT!
                        $("button").on("click",(function(){
                            var choice = $(this).val();
                            
                            if (choice === correctAnswers[0]) {
                                alert(correctAnswers[i]);
                                // display correct message
                                // add 1 point to #correctanswer
                                // call next question
                                // reset timer
                            } else {
                                alert("STOOPID!");
                            }
    
                            // if answer is wrong, display YOU SUCK!
                                // display you suck message
                                // add 1 point to #wronganswer
                                // call next question
                                // reset timer
    
                            // if no answer is chosen, display TIME'S UP!
                                // display you time's up message
                                // add 1 point to #unaswered
                                // call next question
                                // reset timer
                            
                        }));



                    // $("#answers").html("<button>" + q1Choices[i]);
                    // console.log(questions[i]);
                }

                setTimer();
            });
        }


    // click button to start & first question begins with timer
    Game();