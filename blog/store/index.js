import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(p => p.id === editedPost.id)
        if(postIndex > -1){
          state.loadedPosts[postIndex] = editedPost
        }
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://nuxt-udemy-blog.firebaseio.com/posts.json")
          .then(response => {
            const loadedPosts = Object.keys(response.data).map(id => ({
                id,
                ...response.data[id]
              }))

            vuexContext.commit('setPosts', loadedPosts)
          })
          .catch(error => {
            console.error(error)
            context.error(error)
          })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }

        return axios
        .post('https://nuxt-udemy-blog.firebaseio.com/posts.json', createdPost)
        .then(response => {
          vuexContext.commit('addPost', { ...createdPost, id: response.data.name })
        })
        .catch(error => console.error(error))
      },
      editPost(vuexContext, editedPost) {
        vuexContext.commit('editPost', editedPost)
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}

export default createStore
