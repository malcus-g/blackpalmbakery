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
    <image-slider :slides="this.$store.state.images" />
  </div>
</template>


<style scoped>
.gallery-container{
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
