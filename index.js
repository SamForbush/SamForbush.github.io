

import {renderMainPage} from '/components/MainPage.js';
import {renderProjectPage} from '/components/ProjectPage.js';

fetch("data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  if (urlParams.has("project")){
    for(let p = 0; p < data.projects.length; p++){
      if (data.projects[p].id == urlParams.get("project")){
        renderProjectPage(data.projects[p])
      }
    }
  } 
 else renderMainPage(data);
  });

  

  


