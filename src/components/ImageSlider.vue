<script>
import SlideItem from './SlideItem.vue';
import SliderControls from './SliderControls.vue';

export default {

  props: ['slides'],

  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      direction: 'right'
    }
  },

  components: {
    SlideItem,
    SliderControls
  },

  methods: {
    slideLeft(){
      this.stopSlideTimer();
      this.currentSlide = (this.currentSlide > 0) ? --this.currentSlide : this.slides.length - 1;
      this.direction = 'left';
      this.startSlideTimer();
    },

    slideRight(){
      this.stopSlideTimer();
      this.currentSlide = (this.currentSlide < this.slides.length - 1) ? ++this.currentSlide : 0;
      this.direction = 'right';
      this.startSlideTimer();
    },

    setCurrentSlide(index){
      this.currentSlide = index;
    },

    startSlideTimer(){
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this.direction = 'right';
        const index = this.currentSlide < this.slides.length - 1 ? ++this.currentSlide : 0;
        this.setCurrentSlide(index);
      }, 5000);
    },

    stopSlideTimer() {
      clearInterval(this.slideInterval);
    }
  },

  computed: {
    currentImage() {
        return this.slides[this.currentSlide];
      }
  },

  mounted() {
    this.startSlideTimer();
  },

  beforeUnmount(){
    this.stopSlideTimer();
  }

}
</script>

<template>
  <div class="image-slider">
    <slide-item
      v-for="(slide, index) in slides"
      :slide="slide"
      :key="`item-${index}`"
      :current-slide="currentSlide"
      :index="index"
      :direction="direction"
      @mouseenter="stopSlideTimer"
      @mouseout="startSlideTimer">
    </slide-item>
    <slider-controls @slideLeft="slideLeft" @slideRight="slideRight"></slider-controls>
  </div>
</template>

<style>

.image-slider {
  position: relative;
  max-height: 31rem;
  min-height: 400px;
  max-width: 55rem;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-shadow: 1px 1px 5px var(--vt-c-black);
  border-radius: 5px;
}

@media screen and (max-width: 1024px) {

  .image-slider {
    min-height: 270px
  }
}

@media screen and (max-width: 480px) {

  .image-slider {
    max-height: 15em;
    min-height: 175px;
  }

}
</style>
