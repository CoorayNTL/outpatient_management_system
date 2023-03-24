import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { TopNav } from '../../../components'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

import { axiosInstance } from '../../../services/core/axios'

const PatientRegister = () => {
    //navigate variable
    const navigate = useNavigate()
    //useState
    const [validated, setValidated] = useState(false)

    const [form, setForm] = useState({
        name: {
            first_name: '',
            last_name: '',
        },
        email: '',
        password: '',
        phone: '',
        address: '',
        dob: '',
        nic: '',
        gender: '',
    })

    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        const inForm = e.currentTarget

        //check if the form is valid
        if (inForm.checkValidity() === false) {
            setValidated(true)
        } else {
            //if the form is valid send the user entered data
            axiosInstance.post('/auth/register', form).then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Request successfully sent!',
                        showConfirmButton: false,
                        timer: 2000,
                    })
                    setForm({})
                }
            })
                .catch(function (error) {
                    // handle error
                    console.log(error)
                })
                .then(function () {
                    // always executed
                })

            setValidated(false)
        }
    }

    //handleInput
    const handleInput = (e) => {
        const name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value,
        })
    }

    return (
        <>
            <TopNav />
            <div className="">
                <div className="flex justify-center items-center min-h-screen place-items-center">
                    <div className="p-12 bg-white sm:w-8/12 md:w-8/12 lg:w-8/12">
                        <h1 className="text-3xl font-semibold text-center">Register Now !!!</h1>
                        <form className="mt-6 " onSubmit={handleSubmit}>
                            <div className="flex sm:flex-col md:flex-row justify-center">
                                <div className="mr-8">
                                    <label
                                        for="firstName"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="first_name"
                                        placeholder="John"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: {
                                                    ...form.name,
                                                    first_name: e.target.value,
                                                },
                                            })
                                        }
                                        autoComplete="firstName"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="lastName"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="last_name"
                                        placeholder="Doe"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: {
                                                    ...form.name,
                                                    last_name: e.target.value,
                                                },
                                            })
                                        }
                                        autoComplete="lastName"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="email"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="john.doe@company.com"
                                        onChange={handleInput}
                                        autoComplete="email"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="dateOfBirth"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        id="dateOfBirth"
                                        type="text"
                                        name="dob"
                                        placeholder="john.doe@company.com"
                                        onChange={handleInput}
                                        autoComplete="dateOfBirth"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label
                                        for="age"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Age
                                    </label>
                                    <input
                                        id="age"
                                        type="text"
                                        name="age"
                                        placeholder="23"
                                        autoComplete="age"
                                        onChange={handleInput}
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />

                                    <label
                                        for="nic"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        NIC
                                    </label>
                                    <input
                                        id="nic"
                                        type="text"
                                        name="nic"
                                        placeholder="********"
                                        autoComplete="new-nic"
                                        onChange={handleInput}
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="phone"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        placeholder="0764376987"
                                        autoComplete="phone"
                                        onChange={handleInput}
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="gender"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Gender
                                    </label>

                                    <RadioGroup row>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </div>
                                <div className="ml-8">
                                    <label
                                        for="address"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Colombo, Sri Lanka"
                                        autoComplete="address"
                                        onChange={handleInput}
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="password"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        autoComplete="new-password"
                                        onChange={handleInput}
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                    <label
                                        for="password-confirm"
                                        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        id="password-confirm"
                                        type="password"
                                        name="password-confirm"
                                        placeholder="********"
                                        autoComplete="new-password"
                                        onChange={handleInput}
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center justify-center">
                                    <button
                                        onClick={() => {
                                            navigate('/otp')
                                        }}
                                        type="submit"
                                        className="w-5/12 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-[#17d193] shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                                    >
                                        Verify Your Account
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate('/login')
                                        }}
                                        className="text-center mt-4 text-base text-gray-500 cursor-pointer hover:text-black"
                                    >
                                        Already registered?
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PatientRegister
