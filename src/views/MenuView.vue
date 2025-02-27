<script setup>
import MenuContainer from '../components/containers/MenuContainer.vue';
import MenuTitle from '../components/menu/MenuTitle.vue';
import MenuBoard from '../components/menu/MenuBoard.vue';
import MainMenu from '../components/menu/MainMenu.vue';

</script>

<template>
  <menu-container>
    <menu-title />
    <menu-board>
      <main-menu />
    </menu-board>
  </menu-container>
</template>

