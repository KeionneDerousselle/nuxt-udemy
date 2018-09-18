export default function ({ store, redirect }) {
  console.log('auth')
  if (!store.getters.isAuthenticated) redirect('/admin/auth')
}
