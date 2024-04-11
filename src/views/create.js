import { html } from '../../node_modules/lit-html/lit-html.js';  
import { submitHandler, createPointer } from '../utils.js';
import { createQuiz } from '../data/quiz.js';

const createQuizTemplate = (onSubmit) => html` <div class="create-wrapper">
  <form @submit=${onSubmit} class="create-form">
    <p class="create-title">Create your quiz</p>

    <div class="quiz-title">
      <label for="title"></label>
      <input type="text" name="title" id="title" placeholder="Title your quiz"/>
    </div>

    <div class="question-container">
      <div class="question">
        <label for="question"></label>
        <input type="text" name="question" id="question" placeholder="Question"/>
      </div>
      <div class="answer">
        <label for="answer"></label>
        <input type="text" name="answer" id="answer" placeholder="New answer" />
        <div class="correct-answer-container">
        <label for="correct-answer"> Correct answer </label>
        <input type="checkbox" name="correct-answer" id="correct-answer" />
        <button class="delete-answer">
        <i class="fa-regular fa-trash-can fa-xl" style="color: var(--primary);"></i>
        </button>
      </div>
      </div>

      <button class="yellow-btn delete-question">Delete question</button>
    </div>

    <button class="yellow-btn add-question">
      <i class="fa-solid fa-plus"></i>
      Click to add question
    </button>

    <button class="white-btn save-quiz">
      Save quiz
    </button>
  </form>
</div>`;

export function renderCreate(ctx) {
    ctx.render(createQuizTemplate(submitHandler(onSubmit)));

    async function onSubmit(data) {
      const { title } = data;

      if (title === '') {
       return alert('Please fill out of required fields');
      }

      const tempOwner = createPointer('_User', '2zfwlx9YTT'); //! Replace with logged in user's objectID
      await createQuiz({ title, owner: tempOwner });
    }
}