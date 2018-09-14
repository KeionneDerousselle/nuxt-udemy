<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <h1>{{ isLogin? 'Log In' : 'Sign Up'}}</h1>
        <div class="auth-container--form">
          <AppControlInput type="email" v-model="email">Email Address</AppControlInput>
          <AppControlInput type="password" v-model="password">Password</AppControlInput>
        </div>
        <AppButton
          type="button"
          btn-style="inverted"
          @click="isLogin = !isLogin">Click here to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
        <AppButton type="submit" style="margin-left: 10px; float: right;">Continue</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      })
      .then(() => this.$router.push('/admin'))
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.auth-container--form {
  margin: 2rem 0;
}
</style>

