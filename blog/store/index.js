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
