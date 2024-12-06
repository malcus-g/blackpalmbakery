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
    <img src="@/assets/images/3.png" alt="" class="background-img"/>
    <image-slider :slides="this.$store.state.images" class="image-slider" />
  </div>
</template>


<style>
.gallery-container{
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
