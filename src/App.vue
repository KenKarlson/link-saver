<template>
  <div id="app">
    <div class="container">
      <h1>Link Saver "Cererbro"</h1>
      <AddLinkComponent />
      <LinkListComponent />
    </div>

  </div>
</template>

<script>
import AddLinkComponent from './components/AddLinkComponent.vue';
import LinkListComponent from './components/LinkListComponent.vue';

export default {
  name: 'App',
  components: { AddLinkComponent, LinkListComponent }
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
