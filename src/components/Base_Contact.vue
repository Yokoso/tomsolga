<template>
  <article id="contact" class="grid">
    <section data-aos="zoom-in" data-aos-duration="2500">
      <h2 class="title">Contact</h2>
      <p class="subtitle">Send me a message</p>
      <div class="alert">Your message has been sent.</div>
      <ContactForm
        :firstRow="'Name'"
        :secondRow="'Email'"
        :textAreaText="'How can I help you?'"
        :submitButtonText="'SUBMIT'">
      </ContactForm>
    </section>
  </article>
</template>

<script>
import ContactForm from "./ContactForm.vue"
export default {
  components: {
    ContactForm
  }
}
</script>

<style scoped>
#contact {
  background-color: var(--white);
  background-image: linear-gradient(to right bottom, var(--white), var(--white2));
  padding-top: 50px;

}
.alert {
  color: var(--main-color);
  display: none;
  font-style: italic;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}
</style>
