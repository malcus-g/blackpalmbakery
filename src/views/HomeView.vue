<script>
import ContentContainer from '@/components/ContentContainer.vue';
import WelcomeMessage from '../components/WelcomeMessage.vue'
import SocialsButton from '../components/SocialsButton.vue'
import InnerContentSection from '@/components/InnerContentSection.vue';
import ServicesBlurb from '../components/ServicesBlurb.vue'

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
  <div>
    <content-container>
      <welcome-message :greeting="'e komo mai'" :message="'Welcome!'" />
      <inner-content-section>
        <services-blurb />
        <socials-button :url="'https://www.instagram.com/blackpalmbakery_/'" :platform="'Instagram'">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </socials-button>
      </inner-content-section>
      <section class="cookie-image">
        <img src="@/assets/images/real-cookies.png" alt="">
      </section>
    </content-container>
  </div>
</template>

<style scoped>
.cookie-image {
  display: flex;
  width: 100%;
  animation: 1s slide-up;
}

.cookie-image > img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>
