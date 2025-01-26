<script>
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  components: {
    ImageSlider
  },

  mounted() {
    document.title = 'Gallery | Black Palm Bakery';
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Our Past Bakes</h1>
      <image-slider class="image-slider" />
    </div>
  </div>
</template>


<style scoped>

.title {
  margin: .5em 0em;
  animation: 1.5s fade-in ease-in-out;
}

.content {
  padding: 1em 0em 2em 0em;
}

.image-slider {
  animation: slide-up 1s;
}

</style>
