<template>
  <div class="menu-board">
    <slot/>
  </div>
</template>

<style scoped>
.menu-board {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9;
  padding: 1em 0em;
  background-color: var(--vt-c-white);
}
</style>
