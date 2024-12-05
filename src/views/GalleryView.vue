<script>
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  components: {
    ImageSlider
  }
}
</script>

<template>
  <div class="gallery-container">
    <image-slider />
  </div>
</template>


<style scoped>
.gallery-container{
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: center;
  margin-top: 1.5em;
}
</style>
