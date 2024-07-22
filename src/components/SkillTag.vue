<template>
  <div class="skill-tag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SkillTag',
}
</script>

<style scoped>
.skill-tag {
  user-select: none;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border: none;
  border-radius: 50px;
  background-color: var(--color-background);
  color: var(--color-paragraph);
  border: 1px solid var(--color-paragraph);
  font-size: 1.2em;
  transition: transform 0.2s, border 0.2s, background-color 0.2s;
}

.skill-tag:hover {
  transform: translateY(-2px);
  border: 1px solid var(--color-highlight);
  background-color: #e2a2ac17;
}

</style>
