<template>
  <nav id="nav">
    <a class="cv link" href="src/assets/cv.pdf" target="_blank">
      <img src="../assets/img/cv.png" alt="CV">
    </a>
    <ul id="menu" class="grid">
      <li v-for="menuItem in menuItems" :key="menuItem.name"><a class="subtitle" v-bind:href="'#' + menuItem.name">{{upper(menuItem.name)}}</a></li>
    </ul>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      menuItems: [{name: "intro"}, {name: "goals"}, {name: "about"}, {name: "projects"}, {name: "contact"}]
    }
  },
  methods: {
    upper(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>

<style scoped>
nav {
  background-color: var(--black);
  margin: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  top: 0;
  transition: all .5s ease-in-out;
  width: 100%;
}
ul {
  padding: 25px;
  text-align: right;
}
li {
  align-items: center;
  display: flex;
  justify-content: center;
}
nav {
  z-index: 999;
}
.scroll {
  opacity: 1;
}
.navHide {
  display: none;
}
a {
  float: left;
  padding: 7px 0 7px 2%;
}
</style>
