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
  width: clamp(6em, 15%, 20em);
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 1);
}

.title {
  position: fixed;
  top: 45%;
  color: var(--vt-c-white);
  text-align: center;
  text-justify: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  margin: 0;
  padding: 1rem;
  text-shadow: 1px 1px 20px rgb(0, 0, 0);
  opacity: 0;
  transition: opacity .75s ease-out;
}

.title.animate {
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .menu-title {
    display: none;
  }
}
</style>
