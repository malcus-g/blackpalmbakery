<script>
export default{

  props: ['title', 'body', 'isLeft'],

}
</script>

<template>
  <div>
    <section id="info-content" :class="{ left: isLeft, right: !isLeft }">
      <h1 v-if=title class="section-title">{{ title }}</h1>
      <p class="body" v-for="paragraph in body" :key="paragraph">{{ paragraph }}</p>
    </section>
  </div>
</template>

<style scoped>
#info-content {
  display: flex;
  flex-direction: column;
  place-content: center;
  z-index: inherit;
  height: auto;
  width: 100%;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  text-align: center;
  box-shadow: var(--vt-c-black) 1px 1px 10px;
}

.left {
  border-radius: 0px 350px 350px 0px;
  padding: 2em 8em 2em 2em;
  animation: 1s slide-right;
}

.right {
  border-radius: 350px 0px 0px 350px;
  padding: 2em 2em 2em 6em;
  animation: 1s slide-left;
}

#info-content > p {
  margin: 0em 0em 1em 0em;
}

@media screen and (max-width: 768px) {

  #info-content {
    width: 100%;
    border-radius: 100px;
    padding: 2em;
    margin: 2em 0em;
  }
}

</style>
