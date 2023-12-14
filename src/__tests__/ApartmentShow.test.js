import { render, screen } from '@testing-library/react'
import ApartmentShow from '../pages/ApartmentShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import mockApartments from '../mockApartments'

describe("<ApartmentShow/>", () => {
    render(
        <MemoryRouter initialEntries={["/apartmentshow/1"]}>
            <Routes>
                <Route path="apartmentshow/:id" element={<ApartmentShow apartments={mockApartments} />}/>
            </Routes>
        </MemoryRouter>
    )

    it("renders without crashing", () => {
        expect(screen.getByText(text => text.includes(mockApartments[0].bedrooms))).toBeInTheDocument()
        expect(screen.getByText(text => text.includes(mockApartments[0].pets))).toBeInTheDocument()
        expect(screen.getByText(text => text.includes(mockApartments[0].street))).toBeInTheDocument()
        expect(screen.getByText(text => text.includes("Apartment List"))).toBeInTheDocument();
    })

    screen.logTestingPlaygroundURL()


})
