<template>
	<div id="services">
    <p class="subtitle-sm">Weddings</p>
    <font-awesome-icon icon="fa-solid fa-diamond" class="diamond-icon" />
    <p class="subtitle-sm">Private Events</p>
    <font-awesome-icon icon="fa-solid fa-diamond" class="diamond-icon" />
    <p class="subtitle-sm">Birthdays</p>
  </div>
  <div id="tagline-container">
    <p class="tagline-body body">Crafting custom pastries for your special day. Follow us on Instagram to see updates and recent work!</p>
  </div>
</template>

<style scoped>
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
}

@media screen and (max-width: 480px){
  #services {
    flex-direction: column;
  }
}
</style>
