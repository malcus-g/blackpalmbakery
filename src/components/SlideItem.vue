<script>

export default {

  emits: ['mouseenter', 'mouseout'],

  props: ['slide', 'currentSlide', 'index', 'direction'],

  computed: {
    transitionEffect() {
      return this.direction === 'right' ? 'slide-out' : 'slide-in';
    }
  }
};

</script>

<template>
  <transition :name="transitionEffect" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
    <div class="slide-item" v-show="currentSlide === index">
      <img :src="slide" class="slide-content"/>
    </div>
  </transition>
</template>

<style>

.slide-item {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.slide-content {
  object-fit: scale-down;
  width: auto;
  height: auto;
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
