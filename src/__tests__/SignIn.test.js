import { render, screen } from '@testing-library/react';
import SignIn from '../pages/SignIn';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    
    it("has a heading", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
    
        screen.logTestingPlaygroundURL()
    
        const signin = screen.getByRole("heading", {
            name: /Sign In/i
        })
    })

    it("has subheadings", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )

        screen.logTestingPlaygroundURL()

        const username = screen.getByText("Username")
        expect(username).toBeInTheDocument()
        const password = screen.getByText("Password")
        expect(password).toBeInTheDocument()
    })
})