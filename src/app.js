import page from '../node_modules/page/page.mjs';
import { configUserNav } from './middlewares/userNav.js';
import { addRender } from './middlewares/render.js';
import { renderHome } from './views/home.js';
import { navTemplate } from './views/nav.js';
import { renderCreate } from './views/create.js';

page(addRender(document.querySelector('main'), document.querySelector('header')));
page(configUserNav(navTemplate));

page('/', renderHome);
page('/create', renderCreate);

page.start();