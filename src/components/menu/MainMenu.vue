<script setup>
// temporary data. this will eventually come from the store
import { menu } from '@/store/menu.js';
</script>

<script>

export default {
  data() {
    return {
      menu: menu,
    }
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
      <h1 class="category-title section-title">
        {{ category.categoryName }}
        <span class="body order-size">Dozen</span>
      </h1>
      <div class="group" v-for="(group, index) in category.groups" :key="index">
        <h2 class="group-title subtitle group.color" :style="{ color: group.color }">
          {{ group.groupName }}
          <span class="body order-price">
            ${{ group.dozenPrice }}
          </span>
        </h2>
        <p class="items body">
          {{ group.items.map(item => item.itemName).join(', ') }}
        </p>
      </div>
      <div class="mix-n-match" v-if="category.canMix">
        <h2 class="group-title subtitle" :style="{ color: 'orange' }">
          Mix & Match
          <span class="body order-price">
            $32
          </span>
        </h2>
        <p class="items body">
          Select (3) flavors, classic or specialty, to create your perfect dozen!
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.5em;
  text-align: left;
  border-bottom: 1px solid var(--vt-c-black);
}

.group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.group-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  margin: 1em 0em;
}

.items {
  display: flex;
}

.test {
  color: #ecec00;
}
</style>
