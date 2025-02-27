<script setup>
import { menu } from '@/store/menu.js';
</script>

<script>

export default {
  data() {
    return {
      menu: menu,
    }
  },

  methods: {

  },

  mounted() {
    document.title = 'Menu | Black Palm Bakery';
  }
}
</script>

<template>
  <div class="main-menu">
    <div class="logo-container">
      <img class="logo" src="@/assets/images/logo.png" alt="">
    </div>
    <div class="category" v-for="(category, index) in menu" :key="index">
      <h1 class="category-title section-title">{{ category.categoryName }}</h1>
      <div class="group" v-for="(group, index) in category.groups" :key="index">
        <h2 class="group-title subtitle">{{ group.groupName }}</h2>
        <p class="items body">
          {{ group.items.map(item => item.itemName).join(', ') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
}

.logo {
  display: flex;
  width: 15%;
}

.logo-container{
  display: flex;
  width: 100%;
  justify-content: center;
}

.category {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em 3em;
}

.category-title {
  font-size: 4em;
  text-align: center;
  border-bottom: 1px solid var(--vt-c-black);
}

.group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.group-title {
  font-size: 2em;
  margin: 1em 0em;
}

.items {
  display: flex;
}
</style>
