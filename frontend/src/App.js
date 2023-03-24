import React, {Suspense, useEffect} from 'react'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {themeSettings} from './theme'

import Login from './views/common/login/LoginPage'
import Spinner from 'react-bootstrap/Spinner'
import Landing from './views/common/landing/Landing'
import Unauthorized from './views/common/unauthorized/Unauthorized'
import PatientRegister from './views/common/patientRegister/PatientRegister'
import OTPVerification from './views/common/otp/OTPVerification'
import 'react-toastify/dist/ReactToastify.css'
import {ProtectedRoutes, GuestRoutes} from './ProtectedRoutes'
import ForgetPassword from './views/common/forgetPassword/ForgetPassword'
import {Chat} from '../src/components/chat/Chat'

import Layout from './scenes/layout'
import Dashboard from './scenes/dashboard'
import Appointments from './scenes/appointments'
import Products from './scenes/products'
import Doctors from './scenes/doctors/Doctors'
import DoctorsList from './scenes/doctorsList'
import Copyright from "./scenes/doctorAppointmentForm"
import Transactions from './scenes/transactions'
import DoctorsUsers from './scenes/doctors-users/DoctorsUsers'
import DoctorsAdmin from './scenes/doctors-superadmin/DoctorsAdmin'
import DoctorMain from './scenes/adminMainDoctorview'
import PrescriptionReport from "./scenes/doctorPrescriptionFrom"

const loading = (
    <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
)

const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))
const UserLayout = React.lazy(() => import('./layout/UserLayout'))

function App() {
    const mode = useSelector((state) => state.global.mode)
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]) //Setups the theme based on the mode Dark or Light

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={loading}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Routes>
                            <Route element={<GuestRoutes/>}>
                                <Route path="/" name="Landing" element={<Landing/>}/>
                                <Route path="/unauthorized" name="Unauthorized" element={<Unauthorized/>}/>
                                <Route path="/login" name="Login" element={<Login/>}/>

                                <Route path="/otp" name="OTP" element={<OTPVerification/>}/>
                                <Route
                                    path="/patient-registration"
                                    name="PatientRegister"
                                    element={<PatientRegister/>}
                                />

                                <Route path="/forget-password" name="ForgetPassword" element={<ForgetPassword/>}/>
                            </Route>
                            <Route
                                element={<ProtectedRoutes allowedRoles={['SUPER_ADMIN', 'HEALTH_PROF', 'PATIENT']}/>}>
                                <Route element={<Layout/>}>
                                    <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                                    <Route path="/dashboard" element={<Dashboard/>}/>
                                    <Route path="/appointments" element={<Appointments/>}/>
                                    <Route path="/doctors" element={<Doctors/>}/>
                                    <Route path="/doctors-users" element={<DoctorsUsers/>}/>
                                    <Route path="/doctors-superadmin" element={<DoctorsAdmin/>}/>
                                    <Route path="/event" element={<Products/>}/>
                                    <Route path="/doctors-list" element={<DoctorsList/>}/>
                                    <Route path="/Doctor-view-admin" element={<DoctorMain/>}/>
                                    <Route path="/doctor-appointment" element={<Copyright/>}/>
                                    <Route path="/doctor-prescription" element={<PrescriptionReport/>}/>
                                </Route>
                            </Route>

                        </Routes>
                    </ThemeProvider>
                </Suspense>
            </BrowserRouter>

            {/*<Chat/>*/}
        </>
    )
}

export default App
