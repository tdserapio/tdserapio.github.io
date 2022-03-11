const coolio = () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: `How many of the following are algebraic expressions?

            <br>i. x−5
            <br>ii. π
            <br>iii. −2021
            <br>iv. (x+3)2`,
            answers: {
                a: "1",
                b: "2",
                c: "3",
                d: "4"
            },
            correctAnswer: "d"
        },
        {
            question: `Which of the following is NOT always true about two similar terms having variables?`,
            answers: {
                a: "The exponent of each corresponding variable is the same.",
                b: "Their sum is also similar to them.",
                c: "They have the same degree.",
                d: "All of the Above"
            },
            correctAnswer: "b"
        },
        {
            question: `What is the degree of the expression 3⁴x²yz²`,
            answers: {
                a: "4",
                b: "5",
                c: "8",
                d: "9"
            },
            correctAnswer: "b"
        },
        {
            question: `Simplify: 6x − 27 + 19 − 11y + 4x − 11y`,
            answers: {
                a: "10x - 8",
                b: "10x + 8",
                c: "10x - 22y - 8",
                d: "10x - 22y + 8"
            },
            correctAnswer: "c"
        },
        {
            question: `When simplified, all of the following expressions are equal EXCEPT`,
            answers: {
                a: "11 - 4(3x + 1)",
                b: "2 - 3(4x + 5)",
                c: "1 - 6(2x - 1)",
                d: "1 + 2(3 - 6x)"
            },
            correctAnswer: "b"
        },
        {
            question: `If 5y − 8 = 67, which of the following has the highest numerical value?`,
            answers: {
                a: "4",
                b: "5",
                c: "8",
                d: "9"
            },
            correctAnswer: "d"
        },
        {
            question: `The expression 4(x + 5) is the translation of which phrase?`,
            answers: {
                a: "Five more than four times a number",
                b: "Quadruple the sum of a number and five",
                c: "The product of four times a number and five",
                d: "Four times a number more than five"
            },
            correctAnswer: "b"
        },
        {
            question: `Which of the following is always true?`,
            answers: {
                a: "An open expression may contain numbers.",
                b: "A numerical expression may contain variables.",
                c: "An open sentence is a true statement.",
                d: "A numerical sentence is a true statement."
            },
            correctAnswer: "a"
        },
        {
            question: `The open sentence 5(3x − 2)² = x − 3 is the translation of which word statement?`,
            answers: {
                a: "Five times the square of the difference of thrice a number and 2 is equal to three less than the number.",
                b: "Five times the square of the difference of 2 and thrice a number is equal to three less than the number.",
                c: "Five times the square of the difference of thrice a number and 2 is equal to the number less than three.",
                d: "Five times the difference of the square of thrice a number and 2 is equal to five less than the number."
            },
            correctAnswer: "a"
        },
        {
            question: `The formula for the volume (V) of a right cylinder is given as V=πr²h, where r and h are the radius and height of the cylinder, respectively. Which is the correct word statement for the right cylinder?`,
            answers: {
                a: "The volume of the cylinder is jointly proportional to the square of the radius and the height of the cylinder",
                b: "The volume of the cylinder is inversely proportional to the square of the radius and the height of the cylinder",
                c: "The volume of the cylinder is inversely proportional to the radius and the height of the cylinder",
                d: "The volume of the cylinder is jointly proportional to the radius and the height of the cylinder"
            },
            correctAnswer: "a"
        },
        {
            question: `The equation m + a = t + h was rewritten as t + h = m + a. Which property was demonstrated?`,
            answers: {
                a: "Addition Property of Equality",
                b: "Reflexive Property of Equality",
                c: "Transitive Property of Equality",
                d: "Symmetric Property of Equality"
            },
            correctAnswer: "d"
        },
        {
            question: `Given the equation 3x − 25 − 6y = 4x + 2y − 7. All terms with variables need to be on the left-hand side of the equation, while all constants must be on the right-hand side of the equation. Which of the following is equivalent to the given equation?`,
            answers: {
                a: "3x − 4x − 2y + 6y = −7 + 25",
                b: "3x + 4x + 2y - 6y = −7 + 25",
                c: "3x + 4x − 2y - 6y = −7 + 25",
                d: "3x − 4x − 2y - 6y = −7 + 25"
            },
            correctAnswer: "d"
        },
    ];

    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        var i = 1;
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="item"><div class="question"> ${i}.) ${currentQuestion.question} </div>
            <br><div class="answers"> ${answers.join('')} </div></div>`
                );
                i += 1;
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');

        setTimeout(() => {
            showResults();
        }, 180000)
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        swal(`Your score: ${numCorrect} out of ${myQuestions.length}\n\nWill close window in 3 seconds\n\nOr like if it doesn't close by itself... please close it\n\nIf it leads to my main website... oh well`);

        setTimeout(() => {
            window.location.href = "https://tdserapio.github.io"
        }, 3000)
    }

    // Kick things off
    buildQuiz();

    // Event listeners
    submitButton.addEventListener('click', showResults);
};