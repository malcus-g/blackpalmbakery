<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
import NavHeader from './components/NavHeader.vue';

export default {
  components: {
    NavHeader
  },

  data() {
    return {
      isMenuOpen: false
    }
  },

  methods: {
    goToHome() {
      this.$router.push({name: 'home'})
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<template>
  <div id="app-main">
    <img src="@/assets/images/3.png" alt="" class="background-img"/>
    <nav-header />
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024-2025 The Black Palm Bakery. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>

#app-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


main {
  display: flex;
  grid-area: main;
  justify-content: center;
}

footer {
  display: flex;
  grid-area: footer;
  height: auto;
  z-index: 10;
  padding: .2em;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--vt-c-white);
}
</style>
