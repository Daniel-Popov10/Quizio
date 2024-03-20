import { html } from '../../node_modules/lit-html/lit-html.js';

const createQuizTemplate = () => html`
<div class="create-wrapper">
    <form class="create-form">
    <p class="create-title">Create your quiz</p>


<div class="quiz-title">
        <label for="title"></label>
        <input type="text" name="title" id="title" placeholder="Title your quiz"/>
</div>
       
        <div class="question-container">
        <div class="question">
            <label for="question"></label>
            <input type="text" name="question" id="question" placeholder="Question" />
            </div>
            <div class="answer">
            <label for="answer"></label>
            <input type="text" name="answer" id="answer" placeholder="New answer" />
            </div>
            <button class="yellow-btn delete-question">Delete question</button>
        </div>

        <button class="yellow-btn add-question">
        <i class="fa-solid fa-plus"></i>
            Click to add question
        </button>
    </form>
</div>`;

export function renderCreate(ctx) {
    ctx.render(createQuizTemplate());
}