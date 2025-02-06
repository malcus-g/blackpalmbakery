<template>
  <section id="inner-content-section">
    <slot />
  </section>
</template>

<style scoped>
#inner-content-section {
  display: flex;
  flex-direction: column;
  width: auto;
  height: fit-content;
  animation: 1.5s fade-in ease-in-out;
  border-radius: 10px;
  box-shadow: inset var(--vt-c-black) 0px 0px 5px;
  margin: 5em;
  padding: 1em;
}
</style>
