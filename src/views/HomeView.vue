<template>
  <div class="home">
    <img id="logo" src="../images/header_logo.jpeg" alt="">
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
    <img src="../images/2.png" alt="">
  </div>
</template>

<script>

</script>

<style>

.home{
  margin-top: 2rem;
}

#logo{
  display: block;
  margin: 0 auto;
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
