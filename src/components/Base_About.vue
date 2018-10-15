<template>
  <main class="grid" id="about">
    <h2 class="title" data-aos="zoom-in">Who am I?</h2>
    <img src="../assets/img/hi.jpg" alt="#" data-aos="fade-right">
    <p class="subtitle" data-aos="fade-right">{{about}}</p>
    <ul   data-aos="fade-down"
          data-aos-duration="1500">
      <li class="skills subtitle" 
          v-for="skill in skills" 
          :key="skill">
        <span>{{skill}}</span>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data () {
    return {
      about: "Front-end developer located in Wroclaw. I have serious passion for creating intuitive user experiences, UI effects and animations. Let's make something special!",
      skills: ["What do I work with?", "html5", "css3", "javascript", "javascript frameworks", "adobe xd, photoshop", "version control", "css frameworks"]
    }
  }
}
</script>

<style scoped>
#about {
  background-color: var(--white);
  background-image: linear-gradient(to right bottom, var(--white), var(--white2));
  position: relative;
}
.skills {
  background-color: var(--black);
  border-radius: 5px;
  color: var(--main-color);
  cursor: default;
  padding: 7px 25px;
  margin: 10px 0;
}
.skills:first-child {
  background: transparent;
  color: var(--black);
}
img {
  height: auto;
  max-width: 80%;
  opacity: 0.8;
  border-radius: 6px;
  margin-bottom: 2%;
}
</style>
