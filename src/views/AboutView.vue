<template>
  <div id="about-container">
    <section id="about">
      <h1 class="title">ALOHA!</h1>
      <p class="body">At Black Palm Bakery we offer a wide spread of freshly baked pastries.
                      All desserts are scratch-made and items are inspired by the Hawaiian Islands paired width
                      a local Southern flair. No matter the occasion, we provide custom sweets crafted just for you!</p>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>
#about-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/3.png');
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
}

#about {
  justify-content: center;
  height: 75%;
  width: 75%;
  padding: 1em 1em 1em 3em;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  border-radius: 350px 0px 0px 350px;
  text-align: center;
}

#about > h1 {
  font-size: 6rem;
  margin-bottom: .5em;
}
</style>
