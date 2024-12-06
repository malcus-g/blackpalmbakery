<script>

export default {

  props: ['slide', 'currentSlide', 'index', 'direction'],

  computed: {
    transitionEffect() {
      return this.direction === 'right' ? 'slide-out' : 'slide-in';
    }
  }
};

</script>

<template>
  <transition :name="transitionEffect">
    <div class="slide-item" v-show="currentSlide === index">
      <img :src="slide" />
    </div>
  </transition>
</template>

<style scoped>

.slide-item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}

</style>
