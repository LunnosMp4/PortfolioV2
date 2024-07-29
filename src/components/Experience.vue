<template>
  <div class="experience">
    <div class="date desktop">{{ date }}</div>
    <div class="details">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
      <div class="date mobile">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    name: String,
    description: String,
    skills: Array,
    date: String
  }
}
</script>

<style>
.experience {
  display: flex;
  align-items: flex-start;
}

.date {
  flex: 0 0 150px;
  font-size: 1.1em;
  color: var(--color-paragraph);
  margin-right: 20px;
  margin-top: 21px;
}

.date.mobile {
  display: none;
}

.details {
  flex: 1;
}

.details h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
}

.details p {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.details ul {
  list-style: none;
  padding: 0;
}

.details li {
  display: inline-block;
  margin-right: 10px;
  background-color: var(--color-background);
  color: var(--color-paragraph);
  border: 1px solid var(--color-paragraph);
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  font-size: 1em;
  user-select: none;
  transition: transform 0.2s, border 0.2s, background-color 0.2s;
}

.details li:hover {
  transform: translateY(-3px);
  border: 1px solid var(--color-highlight);
  background-color: #e2a2ac17;
}

@media screen and (max-width: 768px) {
  .experience {
    flex-direction: column;
    align-items: flex-start;
  }

  .date {
    margin-right: 0;
    margin-top: 0;
  }

  .date.desktop {
    display: none;
  }

  .date.mobile {
    display: block;
    font-size: 1.1em;
    color: var(--color-paragraph);
    margin-bottom: 20px;
  }
}
</style>
