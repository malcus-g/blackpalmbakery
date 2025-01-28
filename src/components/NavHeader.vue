<!--
This file is way too large and needs to be abstracted into smaller components.
There has to be a better way to do this, but I can't be arsed right now.
It looks  decent and functions how you'd expect. Might refactor later.
-->

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
    },

    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<template>
  <header>
    <img id="header-logo" src="@/assets/images/logo.png" alt="logo" @click="goToHome()"/>
    <nav :class="{ open: isMenuOpen }" @click="closeMenu()" @mouseleave="closeMenu()">
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
  z-index: 10;
}

#header-logo {
  height: 100px;
  cursor: pointer;
}

nav {
  display: flex;
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
  animation: fade-in .3s ease-in-out;
}

a:last-child {
  border: 2px solid black;
}

nav a:hover {
  transform: scale(1.1);
}

nav.open {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: var(--vt-c-white);
  align-items: center;
  gap: 1em;
  top: 109px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2em 1em;
  width: 90%;
  animation: fade-in .3s ease-in-out;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgb(0, 0, 0, .2);
}

nav.open > a{
  padding: .5em;
  width: 100%;
  box-shadow: 0px 2px 4px rgb(0, 0, 0, .2);
}

nav.open > a:hover {
  transform: scale(1.02);
  box-shadow: 0px 4px 6px rgb(0, 0, 0, .2);
}

.menu-toggle {
  display: flex;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: var(--vt-c-black);
}

.menu-toggle:hover {
  transform: scale(1.1);
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
}
</style>
