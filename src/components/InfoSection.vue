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
}

.left {
  border-radius: 0px 350px 350px 0px;
  padding: 2em 4em 2em 2em;
}

.right {
  border-radius: 350px 0px 0px 350px;
  padding: 2em 2em 2em 6em;
}

#about > h1 {
  margin-bottom: .5em;
}

@media screen and (max-width: 1024px){

}
</style>
