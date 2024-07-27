<template>
  <div class="not-found">
    <h1>Page Not Found :(</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link class="redirect" to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
  height: 100vh;
}

.redirect {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: var(--color-button);
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.redirect:hover {
  background-color: var(--color-button-hover);
}


</style>