export function renderAbout(about){
  return `
  <div id= "about">
  </div>
  <h1 class="animate__animated animate__fadeInLeft mobile">
      ${about.name}
    </h1>
    <section class="row">
      <div class="col-6">
        <img
          src="${about.pic}"
          alt="Profile Picture"
          class="pic-profile"
        />
        <p>
          <b>${about.title}</b>
        </p>
        <p>
          ${about.email}
          <br />
          ${about.address}
          <br />
          <a href="${about.linkedin}"
            >LinkedIn <i class="fab fa-linkedin"></i
          ></a>
        </p>
      </div>
      <div class="col-6">
      <div>
       <h1 class="animate__animated animate__fadeInLeft desktop">
      ${about.name}
    </h1>
      </div>
      <div>
      ${about.bio}
      </div>
      </div>
    </section>`;
}