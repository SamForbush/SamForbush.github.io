export function renderNews(news){
  return `
  <h2 id="news" class="animate__animated animate__fadeInLeft">News</h2>
  <div class="search">
        <input type="search" name='news' placeholder="Search News...">
      </div>
    <section class="row">
      <div class="col mobile news-list">
      ${renderNewsMobile(news)}
      </div>
      <div class="col-8 desktop news-list-titles">
      ${renderNewsItemsTitles(news)}
      </div>
      <div class="col-4 desktop news-list-dates">
      ${renderNewsItemsDates(news)}
      </div>
    </section>`
  ;
}

export function addInteractionsNews(data){
  document.querySelector('.search input[name="news"]')
    .addEventListener('input', event => {
    let input = event.target.value;
    let filteredNews = data.news.filter(d => {
      return d.title.toLowerCase().includes(input.toLowerCase());
    }) 
    document.querySelector(".news-list").innerHTML = `${renderNewsMobile(filteredNews)}`;
    document.querySelector(".news-list-titles").innerHTML = `${renderNewsItemsTitles(filteredNews)}`;
    document.querySelector(".news-list-dates").innerHTML = `${renderNewsItemsDates(filteredNews)}`;
  });
}

function renderNewsMobile(news){
  return news.slice(0,5).map(d=>`
  ${d.title}
  <br />
  ${d.date}
  <br />`).join("");
}
function renderNewsItemsTitles(news){
  return news.slice(0,5).map(d=>`
  ${d.title}
  <br />`).join("");
}
function renderNewsItemsDates(news){
  return news.slice(0,5).map(d=>`
  ${d.date}
  <br />`).join("");
}