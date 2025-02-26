<template>
  <div class="menu-board">
    <img id="logo" src="@/assets/images/logo.png" alt="">
  </div>
</template>

<style scoped>
.menu-board {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  z-index: 9;
  align-items: center;
  justify-content: center;
  background-color: var(--vt-c-white);
}

#logo {
  display: flex;
  margin: 1em auto;
  padding: 0em 0em 1em 0em;
  width: 15%;
}
</style>
