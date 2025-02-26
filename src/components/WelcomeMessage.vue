<script>
export default {
  props: {
    greeting: String,
    message: String
  }
}
</script>

<template>
	<section id="heading-line">
    <img id="logo" src="@/assets/images/logo.png" alt="">
    <h1 id="home-title" class="title">
      {{ greeting }}
    </h1>
    <h2 id="intro-message" class="subtitle">
      {{ message }}
    </h2>
  </section>
</template>

<style>
#heading-line {
  width: 75%;
}

#logo {
  display: flex;
  margin: 1em auto;
  padding: 0em 0em 1em 0em;
  width: 25%;
}

#home-title {
  display: flex;
  justify-content: center;
  animation: .75s fade-in ease-in-out;
  border-bottom: 1px solid var(--vt-c-black);
}

#intro-message {
  text-align: center;
  margin: 1em 0em 0em 0em;
  animation: .75s fade-in ease-in-out;
}
</style>
