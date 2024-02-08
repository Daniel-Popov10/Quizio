import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`<h1>Hello world</h1>`;

export function renderHome(ctx) {
  ctx.render(homeTemplate());
}
