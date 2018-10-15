<template>
  <footer class="grid">
    <a class="subtitle link" href="https://github.com/Yokoso" target="_blank">Github</a>
    <a class="subtitle link" href="https://www.goldenline.pl/tomasz-solga/" target="_blank">Goldenline</a>
    <a class="subtitle link" href="https://www.linkedin.com/in/tomasz-solga-6b3a07bb/" target="_blank">LinkedIn</a>
    <p class="subtitle link">{{copyright}}</p>
    <a class="cv link" href="src/assets/cv.pdf" target="_blank">
      <img src="../assets/img/cv.png" alt="CV">
    </a>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: "Copyright 2018 tomsolga.pl"
    }
  },
  mounted() {
    // const links = document.querySelectorAll(".link");

    // ([...links]).forEach((link) => {
    //   (link).setAttribute("data-aos", "zoom-in");
    //   (link).setAttribute("data-aos-delay", "500");
    // });
  }
}
</script>

<style scoped>
footer {
  background-color: var(--black);
  border-top: 3px solid var(--cta-strong-color);
  padding: 6px;
}
p {
  color: var(--lightGray);
  padding: 10px 0;
  margin: 0;
}
</style>
