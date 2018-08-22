<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },

   asyncData(context) {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Post",
              thumbnail:
                "https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg",
              previewText: "This is our first post!"
            },
            {
              id: "2",
              title: "Second Post",
              thumbnail:
                "https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg",
              previewText: "This is our second post!"
            },
            {
              id: "3",
              title: "Third Post",
              thumbnail:
                "https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg",
              previewText: "This is our third post!"
            }
          ]
        });
      }, 1500);
    })
    .then(data => data)
    .catch( e => {
      context.error(new Error(`Could not load the posts.\n${e.message}`))
    })
  }
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

