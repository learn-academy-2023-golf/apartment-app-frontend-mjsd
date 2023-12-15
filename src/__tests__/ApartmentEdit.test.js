import { render, screen } from '@testing-library/react';
import ApartmentEdit from '../pages/ApartmentEdit';
import { BrowserRouter } from 'react-router-dom';
import ApartmentShow from '../pages/ApartmentShow';

describe("<ApartmentEdit />", () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
            <ApartmentEdit /> 
        </BrowserRouter>    
        )
    })

    it("renders the ApartmentEdit page for the user", () => {
        const element = screen.getByRole("heading")
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Edit Apartment Listing.")
    })

    it("has a form with entries for street, unit, city, state", () => {
        const formStreet = screen.getByText("Street Name:")
        expect(formStreet.getAttribute("for")).toEqual("street")
        const formUnit = screen.getByText("Unit Number:")
        expect(formUnit.getAttribute("for")).toEqual("unit")
        const formCity = screen.getByText("City:")
        expect(formCity.getAttribute("for")).toEqual("city")
        const formState = screen.getByText("State:")
        expect(formState.getAttribute("for")).toEqual("state")
    })
})