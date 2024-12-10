<script>
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  components: {
    ImageSlider
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Our Past Bakes</h1>
      <image-slider :slides="this.$store.state.images" class="image-slider" />
    </div>
  </div>
</template>


<style scoped>

.title {
  margin: .5em 0em;
}

.content {
  padding: 1em 0em 2em 0em;
}

</style>
