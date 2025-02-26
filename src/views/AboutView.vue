  <script>
  import InfoSection from '@/components/containers/InfoSection.vue';
  import ContentContainer from '@/components/containers/ContentContainer.vue';

  export default {

    components: {
      InfoSection,
      ContentContainer,
    },

    data(){
      return {
        aloha: {
          title: 'Aloha!',
          body: ['We are committed to bringing the warmth of homemade baking to our community. Our mission is to spread aloha through the power of baked goods.',
                'At Black Palm Bakery we offer a wide spread of freshly baked pastries. All desserts are scratch-made and items are inspired by the Hawaiian Islands paired with a local Southern flair. No matter the occasion, we provide custom sweets crafted just for you!']
        },
        olivia: {
          title: 'Our Story',
          body: ['Baking has always been a part of owner Olivia’s life. Influenced by her mother\'s career of working with pastry chefs in local hotel settings and self-owned catering business, she began to bake on her own at the age of 11. Although baking was just for fun and for family gatherings, it soon grew to be a passion.',
                'She began honing her baking and decorating skills in college by becoming a bakery clerk at various bakeries in town. After returning home to Louisville, Kentucky, she decided to pursue her childhood dreams.  Coming from an African American and Hawaiian background, she set out  to create many deliciously unique pairings of flavors. At Black Palm Bakery, she is able to share her love of baking with her community.']
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
      <info-section id="aloha" class="info-section" :title="this.aloha.title" :is-left="false"/>
      <section class="aloha-body info-body">
        <p class="body" v-for="paragraph in aloha.body" :key="paragraph">{{ paragraph }}</p>
      </section>
      <img src="@/assets/images/cupcake.png" alt="cupcake" id="cupcake-image" class="image"/>
      <info-section id="olivia" class="info-section" :title="this.olivia.title" :is-left="true"/>
      <section class="olivia-body info-body">
        <p class="body" v-for="paragraph in olivia.body" :key="paragraph">{{ paragraph }}</p>
      </section>
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
    "aloha-body aloha-body aloha-body"
    "about about cupcake"
    "about-body about-body about-body";
  padding-bottom: 3em;
}


.info-section {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 8;
}

.info-body {
  animation: .75s fade-in ease-in-out;
  padding: 2em 4em;
  width: 85%;
  border-radius: 10px;
  box-shadow: inset var(--vt-c-black) 0px 0px 5px;
}

.info-body p {
  line-height: 2.5rem;
}

.info-body p:nth-child(even) {
  margin: 2em 0em 0em 0em;
  padding: 2em 0em 0em 0em;
  background: linear-gradient(black, black) top / 200px 2px no-repeat;
}

#aloha {
  justify-content: flex-end;
  grid-area: aloha;
}

.aloha-body {
  grid-area: aloha-body;
  justify-self: center;
}

#olivia {
  justify-content: flex-start;
  grid-area: about;
}

.olivia-body {
  grid-area: about-body;
  justify-self: center;
}

.image {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  place-self: center;
  z-index: 7;
  animation: fade-in .75s ease-in-out;
}

#cookies-image {
  grid-area: cookies;
}

#cupcake-image {
  grid-area: cupcake;
}

@media screen and (max-width: 1024px) {

  .image {
    display: none;
    visibility: hidden;
  }

  .info-body {
    padding: 2em;
  }

  .info-body p {
    line-height: 2rem;
  }

  #about {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto;
    grid-template-areas:
      "aloha aloha aloha"
      "aloha-body aloha-body aloha-body"
      "cookies . cupcake"
      "about about about"
      "about-body about-body about-body";
  }
}


</style>
