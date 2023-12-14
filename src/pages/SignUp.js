import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const SignUp = (user) => {
  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  })
  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    navigate("/signin")
  }

  return (
    <>
      <div className="SignIn">
        <div className="SignIn1">
          <h2>Sign Up</h2>
        </div>
        <div className="SignIn2">
          <Form>
            <FormGroup>
              <Label for="name">
                Username
              </Label>
              <Input
                name="username"
                placeholder="What is your username?"
                type="text"
                onChange={handleChange}
              />
              <Label for="password">
                Password
              </Label>
              <Input
                name="password"
                placeholder="What is your password?"
                type="text"
                onChange={handleChange}
              />
                            <Label for="password">
                Confirm Password
              </Label>
              <Input
                name="password"
                placeholder="Retype your password."
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={handleSubmit}>
                Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default SignUp