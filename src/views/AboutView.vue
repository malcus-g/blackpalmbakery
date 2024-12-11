  <script>
  import InfoSection from '@/components/InfoSection.vue';

  export default {

    components: {
      /* InfoSection PROPS:
          title: string
          body: string
          isLeft: boolean   // determines if the info section aligns left or right */
      InfoSection
    },

    data(){
      /* USE STORE */
      return {
        aloha: {
          title: 'Aloha!',
          body: 'At Black Palm Bakery we offer a wide spread of freshly baked pastries. All desserts are scratch-made and items are inspired by the Hawaiian Islands paired width a local Southern flair. No matter the occasion, we provide custom sweets crafted just for you!'
        },
        olivia: {
          title: 'About Olivia',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis, nobis consectetur unde dicta veritatis accusamus eos exercitationem laudantium illo, temporibus distinctio quia dolorem assumenda ipsam harum nulla quidem velit!'
        }
      };
    },

  }
  </script>

<template>
  <div id="about-container" class="container">
    <div id="about-content" class="content">
      <img src="@/assets/images/cookies.png" alt="cookies" id="cookies-image" class="image"/>
      <info-section id="aloha" class="info-section" :title="this.aloha.title" :body="this.aloha.body" :is-left="false"/>
      <img src="@/assets/images/cupcake.png" alt="cupcake" id="cupcake-image" class="image"/>
      <info-section id="olivia" class="info-section" :title="this.olivia.title" :body="this.olivia.body" :is-left="true"/>
    </div>
  </div>
</template>


<style scoped>

.content {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "cookies aloha aloha"
    "about about cupcake";
  padding-bottom: 1em;
}


.info-section {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 8;
}

#aloha {
  justify-content: flex-end;
  grid-area: aloha;
}

#olivia {
  justify-content: flex-start;
  grid-area: about;
}

.image {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  place-self: center;
  z-index: 7;
  animation: fade-in 1.25s ease-in-out;
}

#cookies-image {
  grid-area: cookies;
}

#cupcake-image {
  grid-area: cupcake;
}

@media screen and (max-width: 1024px) {

  .section-title {
    font-size: 2rem;
  }

  .body {
    font-size: 1rem;
  }

  .content {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto;
    grid-template-areas:
      "aloha aloha aloha"
      "cookies . cupcake"
      "about about about";
  }
}


</style>
