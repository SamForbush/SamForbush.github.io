import {renderNavbar} from './Navbar.js';
import {renderAbout} from './About.js';
import {renderNews} from './News.js';
import {renderProjects} from './Projects.js';
import {addInteractionsNews} from './News.js';
import {addInteractionsProjects} from './Projects.js';

export function renderMainPage(data){
  document.querySelector(".container").innerHTML = 
    `${renderNavbar("main")}
    ${renderAbout(data.about)}
    ${renderNews(data.news)}
    ${renderProjects(data.projects)}`;
    addInteractionsNews(data);
    addInteractionsProjects(data);
}

