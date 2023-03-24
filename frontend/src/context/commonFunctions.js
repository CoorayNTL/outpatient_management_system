export const logout = () => {
  localStorage.removeItem('authorized')
  localStorage.removeItem('role')
  localStorage.removeItem('token')
  localStorage.removeItem('name')
  localStorage.removeItem('authenticated')
}
