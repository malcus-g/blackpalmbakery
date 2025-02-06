<script>
import ContentContainer from '@/components/ContentContainer.vue';
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  components: {
    ImageSlider,
    ContentContainer
  },

  mounted() {
    document.title = 'Gallery | Black Palm Bakery';
  }
}
</script>

<template>
  <content-container>
    <div class="gallery">
      <h1 class="title">Our Past Bakes</h1>
      <image-slider class="image-slider" />
    </div>
  </content-container>
</template>


<style scoped>
.title {
  animation: 1.5s fade-in ease-in-out;
}

.gallery {
  padding: 2em 10em;
 }

.image-slider {
  animation: slide-up 1s;
}
</style>
