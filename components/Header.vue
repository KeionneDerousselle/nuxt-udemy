<template>
  <header class="header">
    <nav class="nav">
      <Logo></Logo>
      <ul class="nav-items">
        <li class="nav-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/users">Users</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from './Logo';

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 210px;
}

.nav {
  width: 100%;
  display: flex;
}

.nav-items {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>

