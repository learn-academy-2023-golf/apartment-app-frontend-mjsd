import { render, screen } from '@testing-library/react';
import SignUp from '../pages/SignUp';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    
    it("has a heading", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
    
        screen.logTestingPlaygroundURL()
    
        const signin = screen.getByRole("heading", {
            name: /Sign Up/i
        })
    })

    it("has subheadings", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )

        screen.logTestingPlaygroundURL()

        const username = screen.getByText("Username")
        expect(username).toBeInTheDocument()
        const password = screen.getByText("Password")
        expect(password).toBeInTheDocument()
        const passwordConfirmation = screen.getByText("Confirm Password")
        expect(passwordConfirmation).toBeInTheDocument()
    })
})