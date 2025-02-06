<template>
  <div class="container">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  width: 95%;
  height: fit-content;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 3em 0em 2em 0em;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  width: 100%;
  height: fit-content;
  box-shadow: var(--vt-c-black) 1px 1px 10px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
