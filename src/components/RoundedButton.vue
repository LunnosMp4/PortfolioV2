<template>
  <button class="rounded-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
}
</script>

<style scoped>
.rounded-button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-button);
  color: var(--color-button-text);
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.rounded-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0px 10px var(--color-highlight);
}

</style>
