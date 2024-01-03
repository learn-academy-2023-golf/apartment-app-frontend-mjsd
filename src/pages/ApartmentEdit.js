import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const ApartmentEdit = ({ apartments, updateApartment, currentUser }) => {

  const { id } = useParams()
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)
  
  const [editApartment, setEditApartment] = useState({
    street: currentApartment?.street,
    unit: currentApartment?.unit,
    city: currentApartment?.city,
    state: currentApartment?.state,
    square_footage: currentApartment?.square_footage,
    price: currentApartment?.price,
    bedrooms: currentApartment?.bedrooms,
    bathrooms: currentApartment?.bathrooms,
    pets: currentApartment?.pets,
    image: currentApartment?.image,
    user_id: currentUser?.id
  })

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()

  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment?.id)
    navigate("/apartmentindex")
  }
  return (
    <>
      <>
        <div className="SignIn">
          <div className="SignIn1">
            <h2>Edit Apartment Listing.</h2>
          </div>
          <div className="SignIn2">
            <Form>
              <FormGroup>
                <Label for="street">
                  Street Name:
                </Label>
                <Input
                  name="street"
                  value={editApartment?.street}
                  type="text"
                  onChange={handleChange}
                />
                <Label for="unit">
                  Unit Number:
                </Label>
                <Input
                  name="unit"
                  value={editApartment?.unit}
                  type="text"
                  onChange={handleChange}
                />
                <Label for="city">
                  City:
                </Label>
                <Input
                  name="city"
                  value={editApartment?.city}
                  type="text"
                  onChange={handleChange}
                />
                <Label for="state">
                  State:
                </Label>
                <Input
                  name="state"
                  value={editApartment?.state}
                  type="text"
                  onChange={handleChange}
                />
                <Label for="square_footage">
                  Square Footage:
                </Label>
                <Input
                  name="square_footage"
                  value={editApartment?.square_footage}
                  type="number"
                  onChange={handleChange}
                />
                <Label for="price">
                  Price:
                </Label>
                <Input
                  name="price"
                  value={editApartment?.price}
                  type="text"
                  onChange={handleChange}
                />
                <Label for="bedrooms">
                  Bedrooms:
                </Label>
                <Input
                  name="bedrooms"
                  value={editApartment?.bedrooms}
                  type="number"
                  onChange={handleChange}
                />
                <Label for="bathrooms">
                  Bathrooms:
                </Label>
                <Input
                  name="bathrooms"
                  value={editApartment?.bathrooms}
                  type="number"
                  onChange={handleChange}
                />
                <Label for="pets">
                  Pets:
                </Label>
                <Input
                  name="pets"
                  value={editApartment?.pets}
                  type="text"
                  onChange={handleChange}
                />
                <Label for="image">
                  Image Url:
                </Label>
                <Input
                  name="image"
                  value={editApartment?.image}
                  type="textarea"
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
    </>
  )
}
export default ApartmentEdit