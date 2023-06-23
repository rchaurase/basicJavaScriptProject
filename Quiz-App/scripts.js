const quizData = [
  {
    question:'How old is Rahul?',
    a:'20',
    b:'25',
    c:'30',
    d:'18',
    correct:'b'
  },{
    question:'What is the best programming language in 2023?',
    a:'java',
    b:'python',
    c:'javaScropt',
    d:'c',
    correct:'c'
  },{
    question:'Who is the fastest animal on earth?',
    a:'Lion',
    b:'Leopard',
    c:'Elephant',
    d:'Tiger',
    correct:'b'
  },{
    question:'Who is most intelligent animal on earth ?',
    a:'Monkey',
    b:'Chimpanzees',
    c:'Wolf',
    d:'Rabbit',
    correct:'b'
  },{
    question:'What does stands for HTML ?',
    a:'Hyper markup language',
    b:'Highest technical model language',
    c:'Hyper text markup language',
    d:'hyper transfer model language',
    correct:'c'
  },{
    question:'What year was javaScript  launched ?',
    a:'2000',
    b:'1996',
    c:'2004',
    d:'1995',
    correct:'d'
  },{
    question:'Who is Most Intelligent Birds In The World ?',
    a:'Crows',
    b:'African Grey',
    c:'Cockatoo',
    d:'Amazon Parrots',
    correct:'a'
  },

]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_option = document.getElementById('a_option')
const b_option = document.getElementById('b_option')
const c_option = document.getElementById('c_option')
const d_option = document.getElementById('d_option')
const submitBtn = document.getElementById('Submit')
let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_option.innerText = currentQuizData.a
  b_option.innerText = currentQuizData.b
  c_option.innerText = currentQuizData.c
  d_option.innerText = currentQuizData.d
  
}
function getSelected() {
  // Retrieve the selected answer from the list of answer elements
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  // Deselect all the answer elements
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            
            <button onclick="location.reload()">Reload</button>`
        }
    }



});