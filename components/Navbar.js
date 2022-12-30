export function renderNavbar(page){
  if (page == "project")
    return `
  <nav class = "mobile">
      <ul>
      <li>
          <a class = "navlink" href= ".#projects" >Go back</a>
        </li>
    </nav>
    <nav class = "desktop">
      <ul>
        <li>
          <a class = "navlink" href = ".#projects" >Go back</a>
        </li>
      </ul>
    </nav>
  `;
  else if (page == "main")
    return`
  <nav class = "mobile">
      <ul>
      <li>
          <a class = "navlink" href="#about">About</a>
        </li>
        <li>
          <a class = "navlink" href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
    <nav class = "desktop">
      <ul>
        <li>
          <a class = "navlink" href="#about" ">About</a>
        </li>
        <li>
          <a class = "navlink" href="#projects" >Projects</a>
        </li>
      </ul>
    </nav>
  `;
}