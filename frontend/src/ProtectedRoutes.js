import { Outlet, Navigate, useLocation } from 'react-router'



const useAuth = () => {
    const user = {
        loggedIn: localStorage.getItem('authenticated'),
        role: localStorage.getItem('role'),
    }
    return user
}

export const ProtectedRoutes = ({ allowedRoles }) => {
    //replace take back to the  page they were before ,adn from where they redirected from
    const location = useLocation()
    const auth = useAuth()


    return allowedRoles?.find((userRole) => userRole === auth?.role) ? (
        <Outlet />
    ) : auth?.loggedIn ? (
        <Navigate to="/unauthorized" replace state={{ from: location }} />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    )
}

export const GuestRoutes = () => {
    //replace take back to the  page they were before ,adn from where they redirected from
    const location = useLocation()
    const auth = useAuth()

    if (auth?.loggedIn) {
        return <Navigate to="/dashboard" replace state={{ from: location }} />
    } else {
        return <Outlet />
    }

}
