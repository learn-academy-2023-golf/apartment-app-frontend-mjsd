import { render, screen } from '@testing-library/react'
import ApartmentNew from '../pages/ApartmentNew'
import { BrowserRouter } from 'react-router-dom'
describe("<ApartmentNew />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <ApartmentNew />
            </BrowserRouter>
        )
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