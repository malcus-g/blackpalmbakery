<script>
import ContentContainer from '@/components/containers/ContentContainer.vue';

export default {
  components: {
    ContentContainer
  },

  mounted() {
    document.title = 'Contact | Black Palm Bakery';
  }
}
</script>

<template>
  <content-container>
    <h1 class="subtitle">Questions?</h1>
    <h2 class="title">Connect with us!</h2>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeGlCx-h9EODSP5035hGvW-e4awBTllmc_bJOobtiaiYVrGg/viewform?embedded=true" class="form">Loading…</iframe>
  </content-container>
</template>


<style scoped>

.form {
  width: 80%;
  height: 920px;
  border: none;
  margin: 1em 0em;

}
.section-title, .title {
  color: var(--color-text-light);
}

.subtitle {
  font-size: 2.5rem;
  margin-top: 1em;
}

.title {
  animation: fade-in 1s ease-in-out;
}
</style>
