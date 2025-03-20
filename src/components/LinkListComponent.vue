<template>
  <div class="links">
    <div v-for="(link, index) in links" :key="index" class="card">
      <h2>{{ link.title }}</h2>
      <p>{{ link.description }}</p>
      <a :href="link.url" target="_blank">Go to Link</a>
      <button @click="removeLink(index)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkListComponent', // Указываем имя компонента
  computed: {
    // Получаем ссылки из хранилища через геттер
    links() {
      return this.$store.getters.allLinks;
    }
  },
  methods: {
    removeLink(index) {
      this.$store.dispatch('removeLink', index); // Отправляем действие в хранилище
    }
  }
};
</script>
<style scoped>
.links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 2 колонки */
  gap: 20px;
  /* Расстояние между карточками */
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.card h2 {
  margin: 0 0 10px;
  font-size: 1.5em;
}

.card p {
  margin: 0 0 10px;
  color: #555;
}

.card a {
  color: #007BFF;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}

.card button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card button:hover {
  background-color: #cc0000;
}

/* Медиа-запрос для маленьких экранов */
@media (max-width: 768px) {
  .links {
    grid-template-columns: 1fr;
    /* 1 колонка */
  }
}
</style>
