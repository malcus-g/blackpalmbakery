<template>
  <div id="home">
    <div id="heading-line">
      <img id="logo" src="@/assets/images/header_logo.jpeg" alt="">
      <h1 id="home-title" class="title">
        e komo mai!
      </h1>
      <h2 id="intro-message" class="subtitle">
        WELCOME
      </h2>
    </div>
    <div class="background-image">
      <img src="@/assets/images/2.png" alt="">
    </div>
  </div>
</template>

<style>

#home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--vt-c-white);
  padding-top: 3em;
  width: 100vw;
  height: 100%;
}

#logo {
  display: flex;
  margin: 0 auto;
  padding: 0em 0em 1em 0em;
}

#home-title {
    display: flex;
    justify-content: center;
}

#intro-message {
  text-align: center;
}

.background-image {
  display: flex;
  width: 100%;
}

.background-image > img {
  object-fit: cover;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 450px) {
  #home-title {
    font-size: 4rem;
  }
}

</style>
