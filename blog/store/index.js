import Vuex from 'vuex'

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
        if (postIndex > -1) {
          state.loadedPosts[postIndex] = editedPost
        }
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then(response => {
            const loadedPosts = Object.keys(response).map(id => ({
              id,
              ...response[id]
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
        const createdPost = { ...post,
          updatedDate: new Date()
        }

        return this.$axios
          .$post('/posts.json', createdPost)
          .then(response => {
            console.log(response)
            vuexContext.commit('addPost',
            {
              ...createdPost,
              id: response.name
            })
          })
          .catch(error => console.error(error))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(`/posts/${editedPost.id}.json`, editedPost)
          .then(response => vuexContext.commit('editPost', editedPost))
          .catch(e => console.error(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
