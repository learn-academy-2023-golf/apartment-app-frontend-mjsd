import React from 'react'
import { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const ApartmentNew = ({createApartment, currentUser}) => {
  const navigate = useNavigate()

  const [newApartment, setNewApartment] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: currentUser?.id
  })
  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createApartment(newApartment)
    navigate("/apartmentindex")
  }

  return (
    <>
      <div className="SignIn">
        <div className="SignIn1">
          <h2>Create New Apartment Listing.</h2>
        </div>
        <div className="SignIn2">
          <form>
            <FormGroup>
              <Label for="street">
                Street Name:
              </Label>
              <Input
                name="street"
                placeholder="What is your street address?"
                type="text"
                onChange={handleChange}
              />
              <Label for="unit">
                Unit Number:
              </Label>
              <Input
                name="unit"
                placeholder="What is your unit number?"
                type="text"
                onChange={handleChange}
              />
              <Label for="city">
                City:
              </Label>
              <Input
                name="city"
                placeholder="What is your city?"
                type="text"
                onChange={handleChange}
              />
                <Label for="state">
                State:
              </Label>
              <Input
                name="state"
                placeholder="What is your State?"
                type="text"
                onChange={handleChange}
              />
               <Label for="square_footage">
                Square Footage:
              </Label>
              <Input
                name="square_footage"
                placeholder="What is your square footage?"
                type="number"
                onChange={handleChange}
              />
               <Label for="price">
                Price:
              </Label>
              <Input
                name="price"
                placeholder="What is your price?"
                type="text"
                onChange={handleChange}
              />
               <Label for="bedrooms">
                Bedrooms:
              </Label>
              <Input
                name="bedrooms"
                placeholder="How many bedrooms?"
                type="number"
                onChange={handleChange}
              />
               <Label for="bathrooms">
                Bathrooms:
              </Label>
              <Input
                name="bathrooms"
                placeholder="How many bathrooms?"
                type="number"
                onChange={handleChange}
              />
               <Label for="pets">
                Pets:
              </Label>
              <Input
                name="pets"
                placeholder="How about pets?"
                type="text"
                onChange={handleChange}
              />
               <Label for="image">
                Image Url:
              </Label>
              <Input
                name="image"
                placeholder="Post your picture here!"
                type="textarea"
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={handleSubmit} name="Submit">
                Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ApartmentNew 