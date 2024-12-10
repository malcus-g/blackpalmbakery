<template>
  <div id="home-container" class="container">
    <div id="home-content" class="content">
      <div id="heading-line">
        <img id="logo" src="@/assets/images/logo.png" alt="">
        <h1 id="home-title" class="title">
          e komo mai!
        </h1>
        <h2 id="intro-message" class="subtitle">
          WELCOME
        </h2>
      </div>
      <div class="cookie-image">
        <img src="@/assets/images/2.png" alt="">
      </div>
    </div>
  </div>
</template>

<style>

#logo {
  display: flex;
  margin: 0 auto;
  padding: 0em 0em 1em 0em;
  width: 25%;
}

#home-title {
  display: flex;
  justify-content: center;
}

#intro-message {
  text-align: center;
}

.cookie-image {
  display: flex;
  width: 100%;
  animation: 1s slide-up;
  box-shadow: inset var(--vt-c-black) 1px 1px 10px;
}

.cookie-image > img {
  object-fit: cover;
  width: 100%;
  height: auto;
}

</style>
