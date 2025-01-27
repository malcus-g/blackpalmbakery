<template>
  <section id="inner-content-section">
    <slot />
  </section>
</template>

<style scoped>
#inner-content-section {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: fit-content;
  justify-content: center;
  animation: 1.5s fade-in ease-in-out;
  border-radius: 10px;
  box-shadow: inset var(--vt-c-black) 0px 0px 5px;
  margin: 3em 0em;
  padding: 2em 0em 0em 0em;
}
</style>
