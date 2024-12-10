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
    <div id="about-content">
      <info-section id="aloha" class="info-section" :title="this.aloha.title" :body="this.aloha.body" :is-left="false"/>
      <info-section id="olivia" class="info-section" :title="this.olivia.title" :body="this.olivia.body" :is-left="true"/>
    </div>
  </div>
</template>


<style>
#about-content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-c-black) 1px 1px 10px;
  border-radius: 10px;
  overflow: hidden;
}

.info-section {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  z-index: 8;
}

#aloha {
  justify-content: flex-end;
}



</style>
