export function renderNews(news, courses, edu) {
  return `
  <p>
  <h2> Resume </h2>
  </p>
  <div class="search">
        <input type="search" name='news' placeholder="Search Resume...">
      </div>
  <section class="row">
      <h4 class = "col-3"> Education  </h4>
      <div class="col mobile">
      ${edu.school}
      <br />
      Graduates in ${edu.date}
      <br />
      ${edu.major}
      <br />
      Minor in ${edu.minor}
      <br />
      GPA: ${edu.gpa}
      <br />
      Dept. GPA: ${edu.deptgpa}
      <br />
      </div>
      <div class="col-8 desktop">
      <p>
      ${edu.school}
      </p>
      <p>
      Major: ${edu.major}
      </p>
      <p>
      Minor: ${edu.minor}
      </p>
      </div>
      <div class="col-4 desktop">
      <p>
      ${edu.date}
      </p>
      <p>
      GPA: ${edu.gpa}
      </p>
      <p>
      Dept. GPA: ${edu.deptgpa}
      </p>
      <br />
      </div>
    </section>
    <section class="row">
      <h4 class = "col-3"> Work Experience </h4>
      <div class="col mobile news-list">
      ${renderNewsMobile(news)}
      </div>
      <div class="col-8 desktop news-list-titles">
      ${renderNewsItemsTitles(news)}
      </div>
      <div class="col-4 desktop news-list-dates">
      ${renderNewsItemsDates(news)}
      </div>
    </section>
    <section class="row">
      <h4 class = "col-3"> Relevant Courses </h4>
      <div class="col mobile courses-list">
      ${renderCoursesMobile(courses)}
      </div>
      <div class="col-8 desktop courses-list-titles">
      ${renderCoursesItemsTitles(courses)}
      </div>
      <div class="col-4 desktop courses-list-dates">
      ${renderCoursesItemsDates(courses)}
      </div>
    </section>
    `;
}

export function addInteractionsNews(data) {
  document
    .querySelector('.search input[name="news"]')
    .addEventListener("input", (event) => {
      let input = event.target.value;
      let filteredNews = data.news.filter((d) => {
        return d.title.toLowerCase().includes(input.toLowerCase());
      });
      document.querySelector(".news-list").innerHTML = `${renderNewsMobile(
        filteredNews
      )}`;
      document.querySelector(
        ".news-list-titles"
      ).innerHTML = `${renderNewsItemsTitles(filteredNews)}`;
      document.querySelector(
        ".news-list-dates"
      ).innerHTML = `${renderNewsItemsDates(filteredNews)}`;
    });
  document
    .querySelector('.search input[name="news"]')
    .addEventListener("input", (event) => {
      let input = event.target.value;
      let filteredCourses = data.courses.filter((d) => {
        return d.title.toLowerCase().includes(input.toLowerCase());
      });
      document.querySelector(
        ".courses-list"
      ).innerHTML = `${renderCoursesMobile(filteredCourses)}`;
      document.querySelector(
        ".courses-list-titles"
      ).innerHTML = `${renderCoursesItemsTitles(filteredCourses)}`;
      document.querySelector(
        ".courses-list-dates"
      ).innerHTML = `${renderCoursesItemsDates(filteredCourses)}`;
    });
}

function renderNewsMobile(news) {
  return news
    .slice(0, 10)
    .map(
      (d) => `
  <p>
  ${d.title}
  <br />
  ${d.date}
  <br /> <\p>`
    )
    .join("");
}
function renderNewsItemsTitles(news) {
  return news
    .slice(0, 10)
    .map(
      (d) => `
  <p> ${d.title} <\p>
  <br />`
    )
    .join("");
}
function renderNewsItemsDates(news) {
  return news
    .slice(0, 10)
    .map(
      (d) => `
  <p> ${d.date} <\p>
  <br />`
    )
    .join("");
}

function renderCoursesMobile(courses) {
  return courses
    .slice(0, 10)
    .map(
      (d) => `
  <p>
  ${d.title}
  <br />
  ${d.date}
  <br /> <\p>`
    )
    .join("");
}
function renderCoursesItemsTitles(courses) {
  return courses
    .slice(0, 10)
    .map(
      (d) => `
  <p> ${d.title} <\p>
  <br />`
    )
    .join("");
}
function renderCoursesItemsDates(courses) {
  return courses
    .slice(0, 10)
    .map(
      (d) => `
  <p> ${d.date} <\p>
  <br />`
    )
    .join("");
}
