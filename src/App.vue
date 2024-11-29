<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <img class="logo" src="/header_logo.jpeg" alt="logo" @click="this.$router.push({name: 'home'})"/>
      <nav>
        <router-link :to="{name: 'home'}"> Home </router-link>
        <router-link :to="{name: ''}">About</router-link>
        <router-link :to="{name: ''}">Gallery</router-link>
        <router-link :to="{name: ''}">Contact</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 The Black Palm Bakery. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>

#app {
  display: grid;
  grid-template-areas:
  "header"
  "main"
  "footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 9999;
  background-color: #ffffff;
  padding: 0 1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

main {
  grid-area: main;
  margin-top: 6rem;
}

footer {
  grid-area: footer;
  padding: .2rem;
  color: black;
  text-align: center;
  border-radius: 5px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
  background-color: white;
}

header img {
  max-width: 100px;
  border-radius: 5px;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: flex-end;

}

nav a {
  text-decoration: none;
  color: #000000;
  margin: 0px 1em;
  padding: .4em 1em;
  border-radius: 8px;
  text-align: center;
}

.router-link-active{
    font-weight: bold;
    color: black;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
