<script>
import image1 from '@/assets/images/gallery/poster.jpg';
import image2 from '@/assets/images/gallery/THANK-YOU.jpg';

export default {
  data() {
    return {
      imageId: 0,
      images: [image1, image2]
    }
  },

  methods: {
    slideLeft(){
      this.imageId = (this.imageId > 0) ? --this.imageId : this.images.length - 1;
    },

    slideRight(){
      this.imageId = (this.imageId < this.images.length - 1) ? ++this.imageId : 0;
    }
  },

  computed: {
    currentImage() {
        return this.images[this.imageId] || '';
      }
  },

}
</script>

<template>
  <section class="image-slider"
          :style="{ backgroundImage: 'url(' + currentImage + ')' }">
    <button class="arrow-left" @click="slideLeft()">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </button>
    <button class="arrow-right" @click="slideRight()">
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </button>
  </section>
</template>

<style scoped>
.image-slider {
  display: flex;
  min-height: 30em;
  width: 75%;
  height: 100%;
  z-index: 9;
  align-items: center;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.image-slider *{
  box-sizing: border-box;
}

.arrow-left, .arrow-right {
  display: flex;
  width: 2em;
  height: 2em;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  margin: 1em;
  border: none;
  border-radius: 50%;
  background: var(--vt-c-white);
  cursor: pointer;
  transition: .3s;
}

.arrow-left:hover, .arrow-right:hover {
  transform: scale(120%);
}
</style>
