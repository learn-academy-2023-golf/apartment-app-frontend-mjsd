import React from 'react'
import { useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        navigate("/")
      }

  return (
    <>
      <div className="SignIn">
        <div className="SignIn1">
          <h2>Sign In</h2>
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
            </FormGroup>
            <button onClick={handleSubmit}>
                Sign In
            </button>
          </Form>
        </div>
      </div>
    </>

  )
}

export default SignIn