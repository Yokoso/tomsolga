<template>
  <div class="grid projectBox" id="projects">
    <section>
      <h2 class="title">Projects</h2>
    </section>
    <section class="projectPage container" :id="project.id" v-for="project in projects" :key="project.id">
      <img :src="projectPhoto + project.id + '.jpg'" alt="projectPhoto">
      <div data-aos="zoom-in-up" data-aos-duration="2500">
        <h2 class="title">{{project.details.title}}</h2>
        <p class="subtitle">{{project.details.description}}</p>
        <p class="subtitle" style="margin:5px">Technologies used:</p>
        <ul>
          <li class="subtitle"
              v-for="techs in project"
              :key="techs.technologies">{{ techs.technologies }}
              <!-- check -->
          </li>
        </ul>
        <button class="linkDetails" target="_blank" @click="goUrl(project.details.url)">More</button>
      </div>
      <hr />
    </section>
    <a class="gh" href="https://github.com/Yokoso" target=_blank>More projects @github</a>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      projectPhoto: "../src/assets/img/projects/"
    }
  },
  methods: {
    // nextClick() {
    //   let projectsLength = this.projects.length;
    //   for (let i = 0; i <= projectsLength; i++)
    //     alert("hi " + i);
    // },
    goUrl(URL) {
      window.location=URL;
    }
  }
}
</script>

<style scoped>
#projects {
  background-color: var(--white);
  background-image: linear-gradient(to right top, var(--white), var(--white2));
  padding-bottom: 0;
}
hr {
  opacity: 0.3;
}

img {
  height: auto;
  width: 80%;
}
h2 {
  margin-bottom: 2%;
  margin-top: 3%;
}
p {
  margin: 4%;
  padding: 0;
}
.projectPage {
  height: auto;
}
.projectPage:last-child {
  margin-bottom: 50px;
}
.container div,
.container div {
  opacity: 1;
  -webkit-transform: scale(0.97);
  transform: scale(0.97);
  -webkit-transition: transform .5s ease, opacity 1.3s ease;
  transition: transform .5s ease, opacity 1.3s ease;
}
.linkDetails {
  background-color: var(--cta-color);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: var(--black);
  cursor: pointer;
  font-size: .8em;
  margin: 5%;
  padding: 10px 0;
  transition: all 0.3s;
  width: 30%;
}
.linkDetails:hover {
  background-color: var(--cta-strong-color);
}

</style>
