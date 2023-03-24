import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Company Route
  { path: '/dashboard', name: 'Company', element: Dashboard, permissions: 'isCompany' },


  //Customer Route
  { path: '/dashboard', name: 'Customer', element: Dashboard, permissions: 'isCustomer' },


  //Admin Route
  { path: '/dashboard', name: 'Dashboard', element: Dashboard, permissions: 'isAdmin' },

]

export default routes
