  <script>
  import InfoSection from '@/components/InfoSection.vue';
  import ContentContainer from '@/components/ContentContainer.vue';

  export default {

    components: {
      /*
      InfoSection PROPS:
      title: string
      body: Array of strings
      isLeft: boolean - determines if the info section aligns left or right
      */
      InfoSection,
      ContentContainer
    },

    data(){
      return {
        aloha: {
          title: 'Aloha!',
          body: ['At Black Palm Bakery we offer a wide spread of freshly baked pastries. All desserts are scratch-made and items are inspired by the Hawaiian Islands paired width a local Southern flair. No matter the occasion, we provide custom sweets crafted just for you!']
        },
        olivia: {
          title: 'Our Story',
          body: ['Baking has always been a part of owner Olivia’s life. Influenced by her mothers career of working with pastry chefs in local hotel settings and self-owned catering business, she began to bake on her own at the age of 11. Although baking was just for fun and for family gatherings, it soon grew to be a passion.',
                'She began honing her baking and decorating skills in college by becoming a bakery clerk at various bakeries in town. After returning home to Louisville, Kentucky, decided to pursue her childhood dreams.  Coming from an African American and Hawaiian background, she set out  to create many deliciously unique pairings of flavors. At Black Palm Bakery she is able to share her love of baking with her community.']
        }
      };
    },

    mounted() {
      document.title = 'About | Black Palm Bakery';
    }
  }
  </script>

<template>
  <content-container>
    <div id="about">
      <img src="@/assets/images/cookies.png" alt="cookies" id="cookies-image" class="image"/>
      <info-section id="aloha" class="info-section" :title="this.aloha.title" :body="this.aloha.body" :is-left="false"/>
      <img src="@/assets/images/cupcake.png" alt="cupcake" id="cupcake-image" class="image"/>
      <info-section id="olivia" class="info-section" :title="this.olivia.title" :body="this.olivia.body" :is-left="true"/>
    </div>
  </content-container>
</template>


<style scoped>

#about {
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
