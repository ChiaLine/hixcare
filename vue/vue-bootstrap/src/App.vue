<template>
  <div id="app">
    <b-container>
      <!-- Content here -->
      <Navbar />
      <Card />
      <Tabs />
      <Cards />
      <Modal />
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import Cards from "./components/Cards.vue";
import Tabs from "./components/Tabs.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Card,
    Cards,
    Tabs,
    Modal
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
