import { render, screen } from '@testing-library/react'
import ApartmentShow from '../pages/ApartmentShow'
import { BrowserRouter } from 'react-router-dom'
import mockApartments from '../mockApartments'

describe("<ApartmentShow/>", () => {
    render(
        <BrowserRouter>
            <ApartmentShow />
        </BrowserRouter>
    )

    it("renders without crashing", () => {
        expect(screen.getByText(text => text.includes("Apartment List"))).toBeInTheDocument();
    })

    screen.logTestingPlaygroundURL()


})
