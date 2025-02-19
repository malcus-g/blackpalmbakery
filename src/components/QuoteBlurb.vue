<script>
export default {
  props: {
    quote: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="quote">
    <h1 class="quote-text">"{{ quote }}"</h1>
    <p class="quote-author">- {{ author }}</p>
  </div>
</template>

<style scoped>
.quote {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 1em;
  width: clamp(20em, 75%, 50em);
}

.quote-text {
  font-size: 1.5em;
  font-style: italic;
  font-weight: normal;
}

.quote-author {
  font-size: 1.2em;
  text-align: right;
}

@media (max-width: 768px) {
  .quote {
    margin: .5em;
    padding: .5em;
  }
  .quote-text {
    font-size: 1.2em;
  }

  .quote-author {
    font-size: 1em;
  }
}
</style>
