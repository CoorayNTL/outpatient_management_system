import React, { useState,useEffect } from 'react'
import TopNav from '../../../components/topnav/TopNav'
import { validateEmail, validateFullName, validateMessage } from '../../../context/validations'
import { IpAddress, SendEmail } from '../../../services/SendMail'
import { toast } from "react-toastify";
import { Form, Button } from 'react-bootstrap'


export default function ForgetPassword() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')
  const [fullNameError, setFullNameError] = useState()
  const [emailError, setEmailError] = useState()

  const [messageError, setMessageError] = useState()
  const [loading, setLoading] = useState(true)
  const [ipData, setIpData] = useState()

  const [buttonLoading, setButtonLoading] = useState(false)
  const [send, setSend] = useState()

  useEffect(() => {
    if (!ipData) {
      IpAddress({ setLoading, setIpData })
    }
    // *********** VALIDATION **********
    validateFullName({ fullName, setFullNameError })
    validateEmail({ email, setEmailError })

    validateMessage({ message, setMessageError })

    // ***********
    if (send) {
      toast.success(send.msg)
      setFullName('')
      setEmail('')
      setMessage('')
      setSend()
    }
  }, [fullName, email, message, send, ipData])
  const submitHandler = (e) => {
    e.preventDefault()
    setButtonLoading(true)
    if (!fullNameError & !emailError & !messageError) {
      SendEmail({ fullName, email, message, setSend }).then(() => {
        setButtonLoading(false)
      })
    }
  }
  return (
    <div>
      <TopNav />
      <div>
        <Form className="mt-5 " onSubmit={submitHandler}>
          <Form.Group className="mb-3 w-75 ms-5" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="text-center">
            <Button variant="primary" type="submit">
              Send Reset Link
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}
