import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler, createPointer } from '../utils.js';
import { createQuiz } from '../data/quiz.js';
import anime from '../../node_modules/animejs/lib/anime.es.js';

const createQuizTemplate = (onSubmit, createQuestion) => html`
<div class="create-wrapper">
  <form @submit=${onSubmit} class="create-form">
    <p class="create-title">Create your quiz</p>

    <div class="quiz-title">
      <label for="title"></label>
      <input type="text" name="title" id="title" placeholder="Title your quiz" />
    </div>

    <button @click=${createQuestion} class="yellow-btn add-question">
      <i class="fa-solid fa-plus"></i>
      Click to add question 
    </button>

    <button class="white-btn save-quiz">Save quiz</button>
  </form>
</div>`;

const newQuestionTemplate = (deleteQuestion) => html`
    <div @click=${deleteQuestion} class="question-container">
      <button  class="white-btn delete-question" title="test">
        Delete question
        <i class="fa-regular fa-trash-can fa-lg" style="margin-left: 2px;"></i>
      </button>
      <div class="question">
        <label for="question"></label>
        <input type="text" name="question" id="question" placeholder="Question" />
      </div>
      <div class="answer-container">
    <div class="answer">
      <label for="answer"></label>
      <input type="text" name="answer" id="answer" placeholder="New answer" />
   </div>
      </div>
    </div>`;

export function renderCreate(ctx) {
  const questionList = [];

  ctx.render(createQuizTemplate(submitHandler(onSubmit), createQuestion));
  

  async function onSubmit(data) {
    const { title } = data;

    if (title === '') {
      return alert('Please fill out of required fields');
    }

    const tempOwner = createPointer('_User', '2zfwlx9YTT'); //! Replace with logged in user's objectID
    await createQuiz({ title, owner: tempOwner });
  }

  function createQuestion(e) {
    e.preventDefault();
     questionList.push(newQuestionTemplate);
     const form = document.querySelector('.create-form');
     const renderBefore = document.querySelector('.add-question');
     render(questionList.map(((question) => html`${question(deleteQuestion)}`)), form, { renderBefore });
     anime({ targets: e.target.previousElementSibling, opacity: '100%', duration: 800, easing: 'linear' });
     e.target.previousElementSibling.scrollIntoView();
  }

  function deleteQuestion(e) {
    e.preventDefault();
    const confirmation = confirm('Are you sure you want to delete this question?');
    if (confirmation) {
      e.currentTarget.remove();
    }
  }
}

