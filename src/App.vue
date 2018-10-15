<template>
  <div>
    <app-nav></app-nav>
    <app-intro></app-intro>
    <app-goals :goals="goals"></app-goals>
    <app-about></app-about>
    <app-projects :projects="projects"></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Base_Navigation from "./components/Base_Navigation.vue"
import Base_Intro from "./components/Base_Intro.vue"
import Base_Footer from "./components/Base_Footer.vue"
import Base_Projects from "./components/Base_Projects.vue"
import Base_About from "./components/Base_About.vue"
import Base_Goals from "./components/Base_Goals.vue"
import Base_Contact from "./components/Base_Contact.vue"

export default {
  components: {
    "app-nav": Base_Navigation,
    "app-intro": Base_Intro,
    "app-goals": Base_Goals,
    "app-about": Base_About,
    "app-projects": Base_Projects,
    "app-contact": Base_Contact,
    "app-footer": Base_Footer
  },
  data () {
    return {
      projects: [
        { id: "projectOne",
          s: 1,
          details: {
            photo: "photo",
            title: "Portfolio",
            description: "Portfolio website created by using vuejs framework",
            technologies: "html5, css3, vuejs, javascript, adobe xd",
            url: "#"
          }},

        { id: "projectTwo",
          s: 2,
          details: {
            photo: "photo",
            title: "Social media app",
            description: "Social media app idea with fullpage.js",
            technologies: "html5, css3, javascript",
            url: "http://google.com"
          }},

        { id: "projectThree",
          s: 3,
          details: {
            photo: "photo",
            title: "Weather app",
            description: "Weather app using openweathermap API in react js app",
            technologies: "html5, css3, reactjs, api",
            url: "http://yokoso.github.io/weather-app/"
          }},

        { id: "projectFour",
          s: 4,
          details: {
            photo: "photo",
            title: "Portfolio idea",
            description: "Pure css&html psd to code",
            technologies: "html5, css3, adobe photoshop",
            url: ""
          }}
      ],
      goals: [
        { id:"goalOne", title: "Time", description: "Fast load times and lag free interaction, my highest priority." },
        { id:"goalTwo", title: "Responsive", description: "My layouts will work on any device, big or small." },
        { id:"goalThree", title: "Intuitive", description: "Strong preference for easy to use, intuitive UX/UI." },
        { id:"goalFour", title: "Dynamic", description: "Websites don't have to be static, I love making pages come to life." }
      ]
    }
  }
}

</script>
