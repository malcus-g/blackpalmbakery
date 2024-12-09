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
  <section class="image-slider">
    <div class="image-slider-inner">
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
  </section>
</template>

<style>

.image-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 85%;
  min-height: 275px;
  background-color: var(--vt-c-white);
  box-shadow: 0px 0px 3px rgb(0, 0, 0, 75%);
  border-radius: 10px;
  animation: 1s slide-down;
}

.image-slider-inner {
  position: relative;
  max-height: 31rem;
  min-height: 400px;
  max-width: 55rem;
  width: 90%;
  height: 90%;
  overflow: hidden;
  box-shadow: 1px 1px 5px var(--vt-c-black);
  border-radius: 5px;
}

@media screen and (max-width: 1024px) {

  .image-slider {
    height: 40%;
    min-height: 400px;
    width: 90%
  }

  .image-slider-inner {
    max-height: 16rem;
    min-height: 270px
  }
}

@media screen and (max-width: 480px) {

  .image-slider {
    height: 34%;
    min-height: 300px;
  }

  .image-slider-inner {
    min-height: 175px;
  }

}
</style>
