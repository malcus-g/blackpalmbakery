<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app-main">
    <header>
      <img id="header-logo" src="@/assets/images/logo.png" alt="logo" @click="this.$router.push({name: 'home'})"/>
      <nav>
        <router-link :to="{name: 'home'}"> Home </router-link>
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{name: 'gallery'}">Gallery</router-link>
        <router-link :to="{name: 'contact'}">Contact</router-link>
      </nav>
    </header>

    <main>
      <img src="@/assets/images/3.png" alt="" class="background-img"/>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024-2025 The Black Palm Bakery. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>

#app-main {
  display: grid;
  grid-template-areas:
  "header"
  "main"
  "footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  position: fixed;
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
  background-color: #ffffff;
  padding: .5em 0em .5em 1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: .4s;
}

#header-logo {
  display: flex;
  cursor: pointer;
  margin-right: auto;
  height: 75px;
}

nav {
  display: flex;
  justify-content: flex-end;
  width: 100vw;
}

nav a {
  margin: 0px 2em;
  padding: 0.3em 1em;
  border-radius: 8px;
  color: var(--vt-c-light-1);
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bolder;
  transition: .4s;
}

main {
  display: flex;
  grid-area: main;
  margin-top: 5em;
  justify-content: center;
}

footer {
  display: flex;
  grid-area: footer;
  height: 40px;
  z-index: 10;
  padding: .2em;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--vt-c-white);
}

@media screen and (max-width: 1024px) {

  #header-logo {
    display: none;
  }

  header {
    place-content: center;
    height: 100px;
  }

  nav {
    top: auto;
    justify-content: center;
    transform: none;
    width: 100%;
  }

  nav a {
    margin: 0px 2em;
    padding: .3em 1em;
    border-radius: 8px;
    text-align: center;
    font-size: 1.1rem;
  }

}

@media screen and (max-width: 650px){

  #header-logo {
    display: none;
  }

  nav a {
    margin: 0px .1em;
    padding: .2em 1em;
    font-size: 1rem;
  }
}

</style>
