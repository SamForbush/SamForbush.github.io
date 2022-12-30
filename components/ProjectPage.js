import {renderNavbar} from './Navbar.js'

export function renderProjectPage(project){
  document.querySelector(".container").innerHTML = 
    `${renderProject(project)}
    ${renderNavbar("project")}`;
}

function renderProject(project){
  if (project.link == "")
  return `
    <h1>
      ${project.title}
    </h1>
    <section class="row">
      <div class="col-6">
        <img
          src="${project.pic}"
          alt="${project.id.toUpperCase()} Picture"
          class="pic-project"
        />
      </div>
      <div class="col-6">
      <p>
        ${project.description}
      </p>
      </div>
    </section>
  `;
  else 
    return `
    <h1>
      ${project.title}
    </h1>
    <section class="row">
      <div class="col-6">
        <img
          src="${project.pic}"
          alt="${project.id.toUpperCase()} Picture"
          class="pic-project"
        />
      </div>
      <div class="col-6">
      <p>
        ${project.description}
        <b> 
        <a href="${project.link}">Link<i></i></a>
      </p>
      </div>
    </section>
  `;
}