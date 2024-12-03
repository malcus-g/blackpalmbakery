<template>
  <div id="home">
    <img id="logo" src="@/assets/images/header_logo.jpeg" alt="">
    <div id="heading-line">
      <h1 id="home-title" class="title">
        e komo mai!
      </h1>
      <h2 id="intro-message" class="subtitle">
        WELCOME
      </h2>
    </div>
  </div>
  <div class="background-image">
    <img src="@/assets/images/2.png" alt="">
  </div>
</template>

<script>

</script>

<style>

#home{
  background-color: var(--vt-c-white);
  z-index: 9998;
  padding-top: 1em;
}

#logo{
  display: flex;
  margin: 0 auto;
  padding: 0em 0em;
}

#home-title{
    display: flex;
    justify-content: center;
}

#intro-message{
  text-align: center;
}

.background-image{
  width: 100vw;
  display: flex;
}

.background-image > img{
  object-fit: cover;
  width: 100%;
  height: 55em;
}

</style>
