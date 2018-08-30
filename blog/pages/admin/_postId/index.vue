<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },

  asyncData(context) {
    return axios
      .get(`https://nuxt-udemy-blog.firebaseio.com/posts/${context.params.postId}.json`)
      .then(response => ({ loadedPost: { ...response.data, id: context.params.postId } }))
      .catch(error => {
        console.error(error)
        context.error(error)
      })
  },

  methods: {
    onSubmitted(postData)  {
      this.$store
      .dispatch('editPost', postData)
      .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
