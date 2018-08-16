<template>
  <section class="container">
    <button @click="onProductBtnClicked">To Products</button>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  methods: {
    onProductBtnClicked() {
      this.$router.push("/products");
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
