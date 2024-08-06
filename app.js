const quizData = [
    {
        question: "Which of the following is used to set the background color of an element?",
        options: ["background-color", "color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: "Which property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "text-decoration"],
        answer: "color"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize", "text-transform: uppercase", "transform: capitalize", "text-capitalize"],
        answer: "text-transform: capitalize"
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-variant", "font-weight"],
        answer: "font-family"
    },
    {
        question: "Which property is used to add or change the shadow of an element's text?",
        options: ["text-decoration", "text-shadow", "text-stroke", "text-outline"],
        answer: "text-shadow"
    },
    {
        question: "How do you select an element with id 'header'?",
        options: ["#header", ".header", "header", "id=header"],
        answer: "#header"
    },
    {
        question: "Which property is used to control the spacing between lines of text?",
        options: ["letter-spacing", "line-height", "text-indent", "text-spacing"],
        answer: "line-height"
    },
    {
        question: "Which property is used to control the space between elements?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "margin"
    },
    {
        question: "How do you make the text bold?",
        options: ["font-weight: bold", "font-style: bold", "font-bold", "text-weight: bold"],
        answer: "font-weight: bold"
    },
    {
        question: "Which property is used to control the speed of the transition effect?",
        options: ["transition-duration", "transition-speed", "transition-time", "transition-length"],
        answer: "transition-duration"
    }
];
let index = 0
let score = 0

function renderQuestion() {
    const quiz = document.getElementById('quiz')
    const option = document.getElementsByName('option')
    const result = document.getElementById('result')
    const retry = document.getElementById('retry')
    const submit = document.getElementById('submit')

    if (index > 0) {
        for (let i = 0; i < option.length; i++) {
            if (option[i].checked) {
                const selectedOption = option[i].nextElementSibling.textContent.trim();
                if (selectedOption === quizData[index - 1].answer) {
                    score++
                }
            }


        }
    }

    if (index >= quizData.length) {
        quiz.innerHTML = ''
        result.innerHTML = `Your Score is ${score} out of ${quizData.length}`
        submit.classList.add('hide')
        retry.classList.remove('hide')

        return
    }



    quiz.innerHTML = `<p class="queation">${quizData[index].question}</p>
            <div class="option">
                <input type="radio" name="option" id="option1">
                <label for="">${quizData[index].options[0]}</label>
            </div>
            <div class="option">
                <input type="radio" name="option" id="option2">
                <label for="">${quizData[index].options[1]}</label>
            </div>
            <div class="option">
                <input type="radio" name="option" id="option3">
                <label for="">${quizData[index].options[2]}</label>
            </div>
            <div class="option">
                <input type="radio" name="option" id="option4">
                <label for="">${quizData[index].options[3]}</label>
            </div>`
    index++
}

function retryQuiz() {
    index = 0
    score = 0
    document.getElementById('result').innerHTML = ""
    document.getElementById('retry').classList.add('hide')
    document.getElementById('submit').classList.remove('hide')
    renderQuestion()

}



renderQuestion()
