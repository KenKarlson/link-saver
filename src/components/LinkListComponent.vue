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
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.card h2 {
  margin: 0 0 10px;
}

.card p {
  margin: 0 0 10px;
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
}

.card button:hover {
  background-color: #cc0000;
}
</style>