import React from 'react'
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'

// routes config
import routes from '../routes'

const AppContent = () => {
    const location = useLocation()

    const matchRoutes = (r) => {
        switch (r) {
            case 'isAdmin':
                return location.pathname.split('/')[1] === 'admin'
            case 'isCustomer':
                return location.pathname.split('/')[1] === 'user'
            case 'isCompany':
                return location.pathname.split('/')[1] === 'user'
            default:
                return false
        }
    }

    return (
        <>
            <Routes>
                {routes.map((route, idx) => {
                    if (matchRoutes(route.permissions)) {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element/>}
                                />
                            )
                        )
                    }
                })}
                <Route path="/" element={<Navigate to="dashboard" replace/>}/>
            </Routes>
        </>
    )
}

export default React.memo(AppContent)
