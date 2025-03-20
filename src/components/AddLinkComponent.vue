<template>
  <form @submit.prevent="addLink">
    <input v-model="url" placeholder="Enter URL" required>
    <input v-model="title" placeholder="Enter Title" required>
    <textarea v-model="description" placeholder="Enter Description" required></textarea>
    <button type="submit">Add Link</button>
  </form>
</template>

<script>
export default {
  name: 'AddLinkComponent', // Указываем имя компонента
  data() {
    return {
      url: '',
      title: '',
      description: ''
    };
  },
  methods: {
    addLink() {
      const newLink = {
        url: this.url,
        title: this.title,
        description: this.description
      };
      this.$store.dispatch('addLink', newLink); // Отправляем действие в хранилище
      this.url = '';
      this.title = '';
      this.description = ''; // Очищаем форму
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

input,
textarea,
button {
  display: block;
  width: 100%;
  /* Убедитесь, что ширина 100% */
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  /* Учитываем padding и border в общей ширине */
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>