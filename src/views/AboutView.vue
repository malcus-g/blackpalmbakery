  <script>
  import InfoSection from '@/components/InfoSection.vue';

  export default {

    components: {
      /* InfoSection PROPS:
                            title: string
                            body: string
                            isLeft: boolean   // determines if the info section aligns left or right*/
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
  <div id="background">
    <info-section id="aloha" class="info-section" :title="this.aloha.title" :body="this.aloha.body" :is-left="false"/>
    <!-- <info-section id="olivia" class="info-section" :title="this.olivia.title" :body="this.olivia.body" :is-left="true"/> -->
  </div>
</template>


<style>
#background {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  /* BACKGROUND */
  background-image: url('@/assets/images/3.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

#aloha {
  justify-content: flex-end;
}

.info-section {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5em 0px;
}


</style>
