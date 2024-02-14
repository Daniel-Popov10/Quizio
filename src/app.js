import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { renderHome } from './views/home.js';

page(addRender(document.querySelector('main'), document.querySelector('header')));

page('/', renderHome);

page.start();