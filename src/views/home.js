import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`<div class="home-wrapper">
<div class="content">
  <h1>Create, explore <br /> and expand your knowledge!</h1>
  <div class="sub-heading">
    <i class="fa-solid fa-grip-lines-vertical fa-2x"></i>
    <p>Quiz your way to mastery with quizio!</p>
  </div>
  <button class="yellow-btn">
    <a href="">Sign up</a>
  </button>
</div>
<div class="image-container">
  <img src="../../static/images/home image.jpg" alt="" />
</div>
</div>`;

export function renderHome(ctx) {
  ctx.render(homeTemplate());
}
