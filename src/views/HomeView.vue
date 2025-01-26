<script>
export
default {
  mounted() {
    document.title = 'Home | Black Palm Bakery';
  }
}
</script>

<template>
  <div id="home-container" class="container">
    <div id="home-content" class="content">
      <section id="heading-line">
        <img id="logo" src="@/assets/images/logo.png" alt="">
        <h1 id="home-title" class="title">
          e komo mai
        </h1>
        <h2 id="intro-message" class="subtitle">
          Welcome!
        </h2>
      </section>
      <section id="services-blurb">
        <div id="services">
          <p class="subtitle-sm">Weddings</p>
          <font-awesome-icon icon="fa-solid fa-diamond" class="diamond-icon" />
          <p class="subtitle-sm">Private Events</p>
          <font-awesome-icon icon="fa-solid fa-diamond" class="diamond-icon" />
          <p class="subtitle-sm">Birthdays</p>
        </div>
        <div id="tagline-container">
          <p class="tagline-body">Crafting custom pastries for your special day. Follow us on Instagram to see updates and recent work!</p>
        </div>
        <div id="socials">
          <a href="https://www.instagram.com/blackpalmbakery_/"
            target="_blank"
            class="instagram-link">
              <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
          </a>
        </div>
      </section>
      <section class="cookie-image">
        <img src="@/assets/images/real-cookies.png" alt="">
      </section>
    </div>
  </div>
</template>

<style scoped>

#logo {
  display: flex;
  margin: 0 auto;
  padding: 0em 0em 1em 0em;
  width: 25%;
}

#home-title {
  display: flex;
  justify-content: center;
  animation: 1s fade-in ease-in-out;
  border-bottom: 1px solid var(--vt-c-black);
}

#intro-message {
  text-align: center;
  margin: 1em 0em 0em 0em;
  animation: 1.5s fade-in ease-in-out;
}

#services-blurb {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: fit-content;
  justify-content: center;
  animation: 1.5s fade-in ease-in-out;
  border-radius: 10px;
  box-shadow: inset var(--vt-c-black) 0px 0px 5px;
  margin: 3em 0em;
  padding: 2em 0em 0em 0em;
}

.diamond-icon {
  margin: 0em 1em;
}

#services {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0em;
  width: 100%;
  font-family: Dream Avenue;
  letter-spacing: 2.5px;
  font-weight: bolder;
  text-shadow: .5px .5px var(--vt-c-black);
  text-align: center;
}

#tagline-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1em 1em;
}

.tagline-body {
  font-weight: bolder;
  font-size: 1.5rem;
}

#socials {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
}

.instagram-link {
  text-decoration: none;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  font-weight: bolder;
  font-size: 1.5rem;
  padding: .3em;
  border-radius: 8px;
}

.instagram-link:hover {
  transform: scale(1.1);
}

.cookie-image {
  display: flex;
  width: 100%;
  animation: 1s slide-up;
}

.cookie-image > img {
  object-fit: cover;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 768px){
  #services {
    flex-direction: column;
  }
}

</style>
