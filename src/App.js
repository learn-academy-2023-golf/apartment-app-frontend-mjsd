import React, { useState, useEffect } from 'react'
import './App.css';
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Signup from "./pages/SignUp"
import Signin from "./pages/SignIn"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])

  const updateApartment = ( apartments, id ) => {
      fetch(`http://localhost:3000/apartments/${id}`,{
        body: JSON.stringify(apartments),
        headers: {
          "Content-Type": "application/json"
        },
        method:"PATCH"
      })
      .then((response) => response.json())
      .then(() => readApartments())
      .catch((errors) => console.log("Apartment update error:", errors))

  }

  const signin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch("http://localhost:3000/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }



  const signout = (id) => {
    fetch("http://localhost:3000/signout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser()
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("http://localhost:3000/apartments")
      .then((response) => response.json())
      .then((payload) => setApartments(payload))
      .catch((error) => console.log(error))
  }

  const createApartment = (apartment) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readApartments())
      .catch((errors) => console.log(errors))
  }


  return (
    <>
      <Header currentUser={currentUser} signout={signout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Signin signin={signin}/>} />
        <Route path="/signup" element={<Signup signup={signup}/>} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
        {
          currentUser && <Route path="/myapartments" element={<ApartmentProtectedIndex currentUser={currentUser} apartments={apartments} />} />
        }
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
        <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment} currentUser={currentUser} />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={apartments} updateApartment={updateApartment} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App