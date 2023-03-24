import './login.css'
import TopNav from '../../../components/topnav/TopNav'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate, useLocation } from 'react-router-dom'
import { axiosInstance } from '../../../services/core/axios'

export default function Login() {
    //email
    const [email, setEmail] = useState('')
    //password
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    //handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()

        //login user

        axiosInstance.post('/auth/login', { email, password }).then((res) => {

            if (res.status === 200) {
                //set localstorage
                localStorage.setItem('role', res.data.data.user.role)
                localStorage.setItem('token', res.data.data.access_token)
                localStorage.setItem('name', res.data.data.user.name.first_name)
                localStorage.setItem('authenticated', true)

                setEmail('')
                setPassword('')

                navigate('/dashboard')
            }
        })
            .catch(function (error) {
                // handle error
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to login!',
                    showConfirmButton: false,
                    timer: 2000,
                })
                console.log(error)
            })
            .then(function () {
                // always executed
            })
    }

    return (
        <>
            <TopNav />

            <div className="">
                <div className="flex justify-center items-center min-h-screen place-items-center">
                    <div className="p-12 bg-white sm:w-8/12 md:w-8/12 lg:w-4/12">
                        <h1 class="text-xl font-semibold text-center">Sign In</h1>
                        <form class="mt-6" onSubmit={handleSubmit}>
                            <label
                                for="email"
                                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="john.doe@company.com"
                                autocomplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required
                            />

                            <label
                                for="password"
                                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="********"
                                autocomplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required
                            />

                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        navigate('/forget-password')
                                    }}
                                    class="text-center mt-4 text-base text-gray-500 cursor-pointer hover:text-black"
                                >
                                    Forget Passowrd ?
                                </button>
                            </div>
                            <button
                                type="submit"
                                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-[#17d193] shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                            >
                                Sign in
                            </button>
                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        navigate('/patient-registration')
                                    }}
                                    class="text-center mt-4 text-base text-gray-500 cursor-pointer hover:text-black"
                                >
                                    Haven't create an account yet ? Register Now !
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}