<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },

  data() {
    return {
      loadedPost: {
        author: 'Keionne Derousselle',
        title: 'My Awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg'
      }
    }
  }
}
</script>
