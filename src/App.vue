<template>
  <div id="app">
    <h1>Link Saver "Cererbro"</h1>
    <form @submit.prevent="addLink">
      <input v-model="newLink.url" placeholder="Enter URL" required>
      <input v-model="newLink.title" placeholder="Enter Title" required>
      <textarea v-model="newLink.description" placeholder="Enter Description" required></textarea>
      <button type="submit">Add Link</button>
    </form>
    <div class="links">
      <div v-for="(link, index) in links" :key="index" class="card">
        <h2>{{ link.title }}</h2>
        <p>{{ link.description }}</p>
        <a :href="link.url" target="_blank">Go to Link</a>
        <button @click="removeLink(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newLink: {
        url: '',
        title: '',
        description: ''
      },
      links: [
        {
          url: 'ya.ru',
          title: 'Searcher',
          description: 'Searcher to internet'
        },
        {},
        {}
      ]
    };
  },
  mounted() {
    if (localStorage.getItem('links')) {
      this.links = JSON.parse(localStorage.getItem('links'));
    }
  },
  methods: {
    addLink() {
      this.links.push({ ...this.newLink });
      this.saveLinks();
      this.newLink = { url: '', title: '', description: '' }; // Очищаем форму
    },
    removeLink(index) {
      this.links.splice(index, 1);
      this.saveLinks();
    },
    saveLinks() {
      localStorage.setItem('links', JSON.stringify(this.links));
    }
  }
};
</script>

<style></style>
