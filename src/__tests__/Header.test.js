import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import logo from '../assets/logo.png'
import userEvent from '@testing-library/user-event';

describe ("<Header />", () => {
    it("has an image", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", logo)
    })

    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        userEvent.click(screen.getByText('Apartment App'))
        expect(screen.getByText("Apartment App")).toBeInTheDocument()
        userEvent.click(screen.getByText('View Apartments'))
        expect(screen.getByText("View Apartments")).toBeInTheDocument()
        userEvent.click(screen.getByText('Create New Apartment'))
        expect(screen.getByText("Create New Apartment")).toBeInTheDocument()
    })
})