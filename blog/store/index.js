import Vuex from 'vuex'

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
              ])
            resolve()
          }, 1500)
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
