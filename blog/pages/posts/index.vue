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

   asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
       loadedPosts: [
          {
            id: "4",
            title: "Fourth Post",
            thumbnail:
              "https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg",
            previewText: "This is our fourth post!"
          },
          {
            id: "5",
            title: "Fifth Post",
            thumbnail:
              "https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg",
            previewText: "This is our fifth post!"
          },
          {
            id: "6",
            title: "Sixth Post",
            thumbnail:
              "https://static.interestingengineering.com/images/APRIL/sizes/code-google-app_resize_md.jpg",
            previewText: "This is our sixth post!"
          }
        ]
      })
    }, 1500);
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

