<script>
export default {
  props: {
    url: String,
    platform: String
  }
}
</script>

<template>
	<div id="socials">
    <a :href="url"
      target="_blank"
      class="socials-link body">
        <slot /> {{ platform }}
    </a>
  </div>
</template>

<style>
#socials {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
}

.socials-link {
  text-decoration: none;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  font-weight: bolder;
  padding: .3em;
  border-radius: 8px;
}

.socials-link:hover {
  transform: scale(1.1);
}
</style>
