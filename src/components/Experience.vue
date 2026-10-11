<template>
  <div class="experience">
    <div class="experience-meta desktop">
      <div class="date">{{ date }}</div>
      <div v-if="location" class="location">
        <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>
        <span>{{ location }}</span>
      </div>
    </div>
    <div class="details">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
      <div class="experience-meta mobile">
        <div class="date">{{ date }}</div>
        <div v-if="location" class="location">
          <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>
          <span>{{ location }}</span>
        </div>
      </div>
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
    date: String,
    location: String
  }
}
</script>

<style>
.experience {
  display: flex;
  align-items: flex-start;
}

.experience-meta {
  flex: 0 0 150px;
  margin-right: 20px;
  margin-top: 21px;
}

.date {
  font-size: 1.1em;
  color: var(--color-paragraph);
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: var(--color-highlight);
}

.experience-meta.mobile {
  display: none;
}

.location {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin-top: 10px;
  color: var(--color-paragraph);
  font-size: 0.9em;
  line-height: 1.35;
}

.location svg {
  flex: 0 0 15px;
  width: 15px;
  height: 15px;
  margin-top: 1px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
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

  .experience-meta {
    margin-right: 0;
    margin-top: 0;
  }

  .experience-meta.desktop {
    display: none;
  }

  .experience-meta.mobile {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
