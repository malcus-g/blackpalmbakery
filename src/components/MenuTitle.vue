<script setup>
import { onMounted, ref } from 'vue'

const titleRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    })
  }, { threshold: 0.1 });

  if (titleRef.value) {
    observer.observe(titleRef.value);
  }
});
</script>

<template>
  <div class="menu-title">
    <h1 class="title" ref="titleRef">Menu</h1>
  </div>
</template>

<style scoped>
.menu-title {
  display: flex;
  width: 15%;
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/4.png');
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 1);
}

.title {
  color: var(--vt-c-white);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  margin: 0;
  padding: 1rem;
  text-shadow: 1px 1px 15px rgb(0, 0, 0);
  opacity: 0;
  transition: opacity .75s ease-out;
}

.title.animate {
  opacity: 1;
}
</style>
