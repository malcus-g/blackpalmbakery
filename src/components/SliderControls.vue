<script>
export default{
  emits: ['slideLeft', 'slideRight']
}
</script>

<template>
  <button class="slider-control left" @click="$emit('slideLeft')">
    Prev
  </button>
  <button class="slider-control right" @click="$emit('slideRight')">
    Next
  </button>
</template>

<style>

.slider-control {
  display: inline-block;
  position: absolute;
  width: 70px;
  height: 45px;
  top: calc(50% - 25px);
  border: none;
  border-radius: 3px;
  color: var(--vt-c-white);
  font-weight: bold;
  background: var(--vt-c-black);
  opacity: 50%;
  cursor: pointer;
  transition: .3s;
}

.slider-control:hover {
  transform: scale(120%);
}

.left {
  left: 0;
}

.right {
  right: 0;
}

</style>
