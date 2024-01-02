import React from 'react'
import { useState, useRef } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const SignIn = ( {signin} ) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    console.log(formData)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password }
    }
    console.log(userInfo)
    signin(userInfo)
    // navigate("/")
    e.target.reset()
  }

  return (
    <>
      <div className="SignIn">
        <div className="SignIn1">
          <h2>Sign In</h2>
        </div>
        <div className="SignIn2">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">
                Username
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
            </FormGroup>
            <a href="/">Sign In</a>
          </Form>
        </div>
      </div>
    </>

  )
}

export default SignIn