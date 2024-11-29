<template>
  <div class="home">
    <img id="logo" src="/public/header_logo.jpeg" alt="">
    <div id="heading-line">
      <h1 id="home-title">
        e komo mai!
      </h1>
      <h2 id="intro-message">
        WELCOME
      </h2>
    </div>
  </div>
  <div class="background-image">
    <img src="/public/2.png" alt="">
  </div>
</template>

<script>

</script>

<style>

.home{
  background-color: white;
  width: 100vw;
  border-radius: 10px;
  margin-top: 2rem;
}

#logo{
  display: block;
  margin: 0 auto;
}

#home-title{
    display: flex;
    font-family: Shirkhand;
    color: black;
    justify-content: center;
    font-size: 8rem;
    text-shadow: 1px 1px 2px rgb(77, 77, 77);
    padding: .5rem 0rem;
}

#intro-message{
  color: black;
  text-align: center;
  font-size: 3rem;
}

.background-image{
  width: 100vw;
}

.background-image > img{
  object-fit: cover;
  width: 100%;
  height: 55em;
}

</style>
