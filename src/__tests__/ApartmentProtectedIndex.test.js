import { render, screen } from '@testing-library/react';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import mockApartments from '../mockApartments';

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test1@example.com",
      id: 1
    }
    const myApartments = mockApartments.filter(apartment => currentUser.id === apartment.user_id)
    render(
        <BrowserRouter>
                <ApartmentProtectedIndex currentUser={currentUser} apartments={myApartments} />
        </BrowserRouter>
    )
})
it("renders without crashing", () => {
    const element = screen.getByText("My Listings:")
    expect(element).toBeInTheDocument()
    screen.logTestingPlaygroundURL()
})

  it("renders street", () => {
    expect(screen.getByText(/\$1800\/month/i)).toBeInTheDocument()
    expect(screen.getByText(/101 rimrock/i)).toBeInTheDocument()
})
})