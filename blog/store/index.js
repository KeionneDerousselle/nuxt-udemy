import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },

      setToken(state, token) {
        state.token = token
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
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }

        return this.$axios
          .$post(`/posts.json?auth=${vuexContext.state.token}`, createdPost)
          .then(response => {
            vuexContext.commit('addPost',
              {
                ...createdPost,
                id: response.name
              })
          })
          .catch(console.error)
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(`/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
          .then(response => vuexContext.commit('editPost', editedPost))
          .catch(console.error)
      },

      authenticateUser(vuexContext, authData) {
        const postAuthBody = {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        };

        const authUrl = authData.isLogin
          ? `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbApiKey}`
          : `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbApiKey}`;

        return this.$axios
          .$post(authUrl, postAuthBody)
          .then(result => vuexContext.commit('setToken', result.idToken))
          .catch(console.error);
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
