<script>
import ContentContainer from '@/components/ContentContainer.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import QuoteBlurb from '@/components/QuoteBlurb.vue';

export default {
  components: {
    ImageSlider,
    ContentContainer,
    QuoteBlurb
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
      <quote-blurb
      class="quote"
      quote="Home is where the heart is. Heart is where cookie is. Math clear: home is cookie."
      author="Cookie Monster" />
    </div>
  </content-container>
</template>


<style scoped>
.title {
  animation: 1.5s fade-in ease-in-out;
  margin: 1em 0em;
}

.gallery {
  display: flex;
  flex-direction: column;
  padding: 2em 10em;
  align-items: center;
 }

.image-slider {
  animation: slide-up 1s;
}

.quote {
  animation: fade-in 1s;

}
</style>
