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
      <quote-blurb
      class="quote"
      quote="Home is where the heart is. Heart is where cookie is. Math clear: home is cookie."
      author="Cookie Monster" />
      <image-slider class="image-slider" />
    </div>
  </content-container>
</template>


<style scoped>
.title {
  animation: 1.5s fade-in ease-in-out;
  width: clamp(20em, 75%, 50em);
  margin: 1em 0em 0em 0em;
}

.gallery {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
 }

.image-slider {
  animation: slide-up 1s;
  width: clamp(20em, 100%, 50em);
  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); */
  border-radius: 5px;
  margin: 2em;
}

.quote {
  animation: fade-in 1s;
  margin: 0em 0em 1em 0em;
  padding: 1em;
  width: clamp(22.5em, 75%, 50em);
}
</style>
