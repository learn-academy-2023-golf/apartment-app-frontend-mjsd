import React, { useRef } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const SignUp = ( {signUp} ) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password }
    }
    signUp(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <>
      <div className="SignIn">
        <div className="SignIn1">
          <h2>Sign Up</h2>
        </div>
        <div className="SignIn2">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">
                Email
              </Label>
              <Input
                name="email"
                placeholder="What is your email?"
                type="email"
              />
              <Label for="password">
                Password
              </Label>
              <Input
                name="password"
                placeholder="What is your password?"
                type="password"
              />
              <Label for="password confirmation">
                Confirm Password
              </Label>
              <Input
                name="password_confirmation"
                placeholder="Retype your password."
                type="password"
              />
              <br />
              <a href="/signin">Submit</a>
            </FormGroup>
          </Form>
        </div>
      </div>
    </>
  )
}

export default SignUp