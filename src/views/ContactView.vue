<template>
  <div id="contact-container" class="container">
    <div id="contact-content" class="content">
      <h1 class="section-title">Questions?</h1>
      <h2 class="title">Connect with us!</h2>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWEP53OLL6vZFecY-hMiwuVnwfoynbajfHMMWJJxdAFZvF0A/viewform?embedded=true" class="form">Loading…</iframe>
    </div>
  </div>
</template>


<style scoped>

.form {
  width: 80%;
  height: 920px;
  border: none;

}
.section-title, .title {
  color: var(--vt-c-black);
}

.section-title {
  font-size: 2.5rem;
  margin-top: 1em;
}

.title {
  animation: slide-right 1.5s ease-in-out;
}
</style>
