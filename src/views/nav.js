import anime from '../../node_modules/animejs/lib/anime.es.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

export const navTemplate = () => html` <div class="navigation-wrapper">
    <a href="/" class="title">Quiz<span>io</span></a> 

    <button class="expand-nav" @click="${showMobileNav}">
      <i class="fa-solid fa-bars fa-4x" style="color: var(--primary);"></i>
    </button>

    <nav>
      <a href="">Browse</a>
      <a href="/create">Create a quiz</a>
      <a href="">About us</a>
      <button class="white-btn">
        <a href="/login">Sign in</a>
      </button>
    </nav>

    <nav class="mobile-nav">
      <button class="close-nav" @click="${hideMobileNav}">
        <i class="fa-solid fa-x fa-3x" style="color: var(--primary);"></i>
      </button>
      <a href="">Browse</a>
      <a href="/create">Create a quiz</a>
      <a href="">About us</a>
      <button class="white-btn">
        <a href="/login">Sign in</a>
      </button>
    </nav>
  </div>
  <div class="border"></div>`;

function showMobileNav() {
  anime({ targets: '.mobile-nav', translateY: 0 ,easing: 'easeInOutExpo' });
}

function hideMobileNav() {
  anime({ targets: '.mobile-nav', translateY: '-100%' ,easing: 'easeInOutExpo' });
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.mobile-nav');
  nav.style.transform = 'translateY(-100%)';
});