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

const quizContiner = document.getElementById('quiz')
const resultContainer = document.getElementById('result')
const submitButton = document.getElementById('submit')
const retryButton = document.getElementById('retry')
const showAnswerButton = document.getElementById('showAnswer')

let currentQuestion = 0
let score = 0
let incorrectAnswer = []

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]]
    }
}

function displayQuestion() {
    const questionData = quizData[currentQuestion]
    const questionElement = document.createElement('div')
    questionElement.className = 'question'
    questionElement.innerHTML = questionData.question

    const optionsElement = document.createElement('div')
    optionsElement.className = 'options'

    const shuffledOptions = [...questionData.options]
    shuffleArray(shuffledOptions)

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('lable')
        option.className = 'option'

        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'quiz'
        radio.value = shuffledOptions[i]

        const optionText = document.createTextNode(shuffledOptions[i])

        option.appendChild(radio)
        option.appendChild(optionText)
        optionsElement.appendChild(option)
    }

    quizContiner.innerHTML = ''
    quizContiner.appendChild(questionElement)
    quizContiner.appendChild(optionsElement)
}

displayQuestion()