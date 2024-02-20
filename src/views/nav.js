import { html } from '../../node_modules/lit-html/lit-html.js';

export const navTemplate = () => html`<nav>
    <div>
      <p class="title">Quiz<span>io</span></p>
    </div>

    <div class="navigation-container">
      <a href="">Browse</a>
      <a href="">Create a quiz</a>
      <a href="">About us</a>
      <button class="white-btn">
        <a href="/login">Sign in</a>
      </button>
    </div>
  </nav>
  <div class="border"></div>`;
