<script>
export default{

  props: ['title', 'body', 'isLeft'],

}
</script>

<template>
  <div id="about-container">
    <section id="content" :class="{ left: isLeft, right: !isLeft }">
      <h1 v-if=title class="section-title">{{ title }}</h1>
      <p class="body">{{ body }}</p>
    </section>
  </div>
</template>

<style scoped>

/* #about-container {
  position: relative;
} */

#content {
  display: flex;
  flex-direction: column;
  place-content: center;
  height: auto;
  width: 60%;
  margin: 3em 0em;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  text-align: center;
  box-shadow: var(--vt-c-black) 1px 1px 10px;
}

.left {
  border-radius: 0px 350px 350px 0px;
  padding: 2em 6em 2em 2em;
  animation: 1s slide-right;
}

.right {
  border-radius: 350px 0px 0px 350px;
  padding: 2em 2em 2em 6em;
  animation: 1s slide-left;
}

#about > h1 {
  margin-bottom: .5em;
}

@media screen and (max-width: 1024px) {

  #content {
    width: 75%;
  }

}

@media screen and (max-width: 768px) {

  #content {
    width: 100%;
    border-radius: 100px;
    padding: 2em;
    margin: 2em 0em;
  }
}

</style>
