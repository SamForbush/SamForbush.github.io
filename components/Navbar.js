export function renderNavbar(page){
  if (page == "project")
    return `
  <nav class = "mobile">
      <ul>
      <li>
          <a href= ".">Go back</a>
        </li>
    </nav>
    <nav class = "desktop">
      <ul>
        <li>
          <a href = "."="#about">Go back</a>
        </li>
      </ul>
    </nav>
  `;
  else if (page == "main")
    return`
  <nav class = "mobile">
      <ul>
      <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
    <nav class = "desktop">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  `;
}