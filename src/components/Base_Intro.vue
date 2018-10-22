<template>
  <header id="intro" class="grid">
    <section class="headerSection" data-aos="fade-up" data-aos-delay="1000">
      <h1>Front-end deve<span class="red">lover</span></h1>
      <p>I'm Tomek! I design and develop websites.</p>
    </section>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header {
  background-color: var(--off-color);
  position: relative;
}
header::after {
  background-position: center;
  content: "";
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.headerSection {
  opacity: 0;
  z-index: 2;
}
h1 {
  color: var(--main-color);
  padding: 3%;
}
p {
  color: var(--lightGray);
}
/* @media only screen and (max-width: 600px) {
  header {
    background-image: none;
  }
} */
</style>
