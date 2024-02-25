import { html } from '../../node_modules/lit-html/lit-html.js';

export const navTemplate = () => html` <div class="navigation-wrapper">
    <p class="title">Quiz<span>io</span></p>

    <button class="expand-nav" @click="${showMobileNav}">
      <i class="fa-solid fa-bars fa-4x" style="color: var(--primary);"></i>
    </button>

    <nav>
      <button class="compress-nav" @click="${showMobileNav}">
        <i class="fa-solid fa-x fa-3x" style="color: var(--primary);"></i>
      </button>
      <a href="">Browse</a>
      <a href="">Create a quiz</a>
      <a href="">About us</a>
      <button class="white-btn">
        <a href="/login">Sign in</a>
      </button>
    </nav>
  </div>
  <div class="border"></div>`;

function showMobileNav() {
  const nav = document.querySelector('nav');
  if (nav.classList.contains('show-menu')) {
    nav.classList.remove('show-menu');
    nav.classList.add('hide-menu');
  } else {
    nav.classList.add('show-menu');
    nav.classList.remove('hide-menu');
  }
}
