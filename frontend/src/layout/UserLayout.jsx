import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routes'
import { AppContent, UserSidebar, TopNav } from '../components'

const DefaultLayout = () => {
  const [isActive, setActive] = useState(false)
  

//get the path
  const currentLocation = '/' + useLocation().pathname.split('/')[2]

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }
  const breadcrumbs = getRouteName(currentLocation, routes)

  return (
    <>
      <TopNav />
      <div className="container mt-2">
        <div className="row">
          <p>Home / {breadcrumbs}</p>
        </div>

        <div className="row">
          <div className="d-flex">
            <UserSidebar setActive={setActive} isActive={isActive} />
            <div id="content-wrapper">
              <AppContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
