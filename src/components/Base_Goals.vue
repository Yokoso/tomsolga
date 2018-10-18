<template>
  <section id="goals" class="grid">
    <div class="goalsDescription">
      <h2 class="title" data-aos="zoom-in">Development goals</h2>
    </div>
    <div v-for="goal in goals" 
         :id="goal.id" 
         :key="goal.id"
         class="goals"
         data-aos="zoom-in-up"
         data-aos-duration="1500">
      <img :src="goalPhoto + goal.id + '.svg'" alt="articlePhoto">
        <h4>{{goal.title}}</h4>
        <p class="subtitle">{{goal.description}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    goals: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      goalPhoto: "../src/assets/img/goals/"
    }
  }
}
</script>

<style scoped>
#goals {
  background-color: var(--white);
  background-image: linear-gradient(to right top, var(--white), var(--white2));
}
h4 {
  font-family: "Open sans", sans-serif;
  font-size: .9em;
  font-weight: bolder;
  padding: 20px 0;
}
img {
  max-height: 100px;
  max-width: 100px;
}
</style>
