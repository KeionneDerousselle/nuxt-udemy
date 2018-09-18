export default function (context) {
  if(context.isClient) {
    context.store.dispatch('initAuth')
  }
 }
