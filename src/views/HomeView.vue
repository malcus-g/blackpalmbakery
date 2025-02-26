<script setup>
import { onMounted, ref } from 'vue'

const cookieImageRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    })
  }, { threshold: 0.1 });

  if (cookieImageRef.value) {
    observer.observe(cookieImageRef.value);
  }
});
</script>

<script>
import ContentContainer from '@/components/containers/ContentContainer.vue';
import WelcomeMessage from '../components/home/WelcomeMessage.vue'
import SocialsButton from '../components/home/SocialsButton.vue'
import InnerContentSection from '@/components/containers/InnerContentSection.vue';
import ServicesBlurb from '../components/home/ServicesBlurb.vue'

export default {
  components: {
    ContentContainer,
    WelcomeMessage,
    SocialsButton,
    InnerContentSection,
    ServicesBlurb
  },

  mounted() {
    document.title = 'Home | Black Palm Bakery';
  }
}
</script>

<template>
  <content-container>
    <welcome-message :greeting="'e komo mai'" :message="'Welcome!'" />
    <inner-content-section>
      <services-blurb />
      <socials-button :url="'https://www.instagram.com/blackpalmbakery_/'" :platform="'Instagram'">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </socials-button>
    </inner-content-section>
    <section ref="cookieImageRef" class="cookie-image">
      <img src="@/assets/images/real-cookies.png" alt="">
    </section>
  </content-container>
</template>

<style scoped>
.cookie-image {
  display: flex;
  width: 100%;
  opacity: 0;
  transform: translateY(25%);
  transition: opacity .75s ease-out, transform .75s ease-out;
}

.cookie-image.animate {
  opacity: 1;
  transform: translateY(0);
}

.cookie-image > img {
  object-fit: cover;
  width: 100%;
}
</style>
