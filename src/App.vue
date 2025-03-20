<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>Link Saver "Cererbro"</h1>
        <p>Save all your links</p>
      </div>

      <AddLinkComponent />
      <LinkListComponent />
    </div>
  </div>
</template>

<script>
import AddLinkComponent from "./components/AddLinkComponent.vue";
import LinkListComponent from "./components/LinkListComponent.vue";

export default {
  name: "App",
  components: { AddLinkComponent, LinkListComponent },
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
h1,
p {
  margin: 0;
}
.header {
  text-align: center;
  color: rgb(12, 10, 10);
  margin-bottom: 20px;
}
.header p {
  font-size: 14px;
}
</style>
