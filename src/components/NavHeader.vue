<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
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
  <header>
    <img id="header-logo" src="@/assets/images/logo.png" alt="logo" @click="goToHome()"/>
    <nav :class="{ open: isMenxuOpen }">
      <router-link :to="{name: 'home'}"> Home </router-link>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link :to="{name: 'gallery'}">Gallery</router-link>
      <router-link :to="{name: 'contact'}">Contact</router-link>
    </nav>
    <button class="menu-toggle" @click="toggleMenu">
      <span v-if="!isMenuOpen">&#9776;</span>
      <span v-else>&times;</span>
    </button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .25rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgb(0, 0, 0, .2);
}

#header-logo {
  height: 100px;
  cursor: pointer;
}

nav {
  display: flex;
}

nav.open {
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 1em;
  top: 105px;
  padding: 1em 0;
  width: 100%;
}

nav.open > a:hover {
  background-color: rgb(0, 0, 0, .3);
}

nav.open > a{
  padding: 1em;
  background-color: rgb(0, 0, 0, .1);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
}

nav a {
  margin: 0px 2em;
  padding: 0.3em 1em;
  border-radius: 8px;
  color: var(--vt-c-light-1);
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bolder;
}


@media screen and (max-width: 1024px) {
  nav a {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 200px;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
