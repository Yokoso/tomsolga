<template>
    <form id="contactForm" accept-charset="UTF-8" action="https://usebasin.com/f/91e0597447f8" method="POST">
        <input name="name" id="name" type="text" class="contact-input subtitle" autocomplete="off" :placeholder="firstRow" required />
        <input name="email" id="email" type="email" class="contact-input subtitle" autocomplete="off" :placeholder="secondRow" required />
        <textarea name="text" id="message" class="contact-input subtitle" :placeholder="textAreaText" required ></textarea>
        <input type="submit" :value="submitButtonText"/>
    </form>
</template>

<script>
export default {
  props: [
    'firstRow',
    'secondRow',
    'textAreaText',
    'submitButtonText'
  ]
}
</script>

<style scoped>
form {
  padding: 0 50px;
  margin: 50px auto;
}
.contact-input {
  background-color: var(--white);
  border: 1px solid #dee0e0;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  color: var(--off-color);
  font-family: "Open Sans", sans-serif;
  line-height: 22px;
  margin-bottom: 15px;
  padding: 2%;
  transition: all 0.3s;
  outline: 0;
  width: 100%;
}
.contact-input:focus {
  border: 2px solid var(--cta-color);
}
textarea {
  min-height: 20vh;
  line-height: 150%;
  resize: vertical;
}
[type="submit"] {
  background-color: var(--cta-color);
  color: var(--off-color);
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: .8em;
  padding: 10px 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  width: 100%;
}
[type="submit"]:hover {
  background-color: var(--cta-strong-color);
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--black);
  opacity: 0.8; /* Firefox */
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: var(--off-color);
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--off-color);
}
</style>
