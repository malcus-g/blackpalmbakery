<script>
export default{

  props: ['title', 'isLeft'],

}
</script>

<template>
  <div>
    <section id="info-content" :class="{ left: isLeft, right: !isLeft }">
      <h1 class="section-title">{{ title }}</h1>
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
  margin: 4em 0em 2em 0em;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  text-align: center;
  box-shadow: var(--vt-c-black) 1px 1px 10px;
}

.left {
  border-radius: 0px 350px 350px 0px;
  padding: 1em 4em 1em 1em;
  animation: 1s slide-right;
}

.right {
  border-radius: 350px 0px 0px 350px;
  padding: 1em 1em 1em 4em;
  animation: 1s slide-left;
}

@media screen and (max-width: 768px) {

  #info-content {
    width: 100%;
    padding: 2em;
    margin: 2em 0em;
  }
}

</style>
