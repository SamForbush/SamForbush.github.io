export function renderProjects(projects) {
  return `
  <h2 id="projects" class="animate__animated animate__fadeInLeft">
      Projects
    </h2>
    <div class="filter">
	<label>
	  <input type="radio" name="filter" value="all" checked>
    All
  </label>
	<label>
	  <input type="radio" name="filter" value="coursework">
    Coursework
	</label>
	<label>
	  <input type="radio" name="filter" value="research">
    Research
	</label>
</div>
<br/ >
    <section class="row project-list link">
    ${renderProjectItems(projects)}
    </section>
  `;
}

export function addInteractionsProjects(data) {
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach((cond) =>
    cond.addEventListener("change", function (event) {
      let input = event.target.value;
      let filteredProjects = data.projects.filter((d) => {
        return d.tag.toLowerCase() == input.toLowerCase();
      });
      if (input == "all")
        document.querySelector(
          ".project-list"
        ).innerHTML = `${renderProjectItems(data.projects)}`;
      else
        document.querySelector(
          ".project-list"
        ).innerHTML = `${renderProjectItems(filteredProjects)}`;
    })
  );
}

function renderProjectItems(projects) {
  return projects
    .map(
      (d) => `
  <div class = "col-12">
  <p>
        <h3>
          <a href="?project=${d.id}">${d.title} <i class="${d.symbol}"></i></a>
        </h3>
        <br />
        <div class="proj-${d.tag.toLowerCase()}">
          ${d.tag}
        </div>
        <br />
        <img
          src="${d.pic}"
          alt=${d.id.toUpperCase()} Picture"
          class="pic-project"
        />
    </p>
      </div>
  `
    )
    .join("");
}
