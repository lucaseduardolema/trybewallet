import React from "react"
import App from "../App"
import { renderWithRouterAndRedux } from "./helpers/renderWith"
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"

window.fetch = jest.fn(async () => ({
  json: async () => mockData,
}));

afterEach(() => jest.clearAllMocks());

describe('Star test 1', () => {
  test('Login page', () => {
    const { history, store } = renderWithRouterAndRedux(<App />)
    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')
    const entrarButton = screen.getByRole('button', { name: /entrar/i})

    expect(history.location.pathname).toBe('/');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(entrarButton).toBeInTheDocument();
    expect(entrarButton).toBeDisabled();

    userEvent.type(emailInput, 'te!st@mail.com');
    userEvent.type(passwordInput, '123');
    expect(entrarButton).toBeDisabled();

    userEvent.type(emailInput, 'test@mail.com');
    userEvent.type(passwordInput, '123');
    expect(entrarButton).toBeDisabled();

    userEvent.type(emailInput, 'tes!t@mail.com');
    userEvent.type(passwordInput, '12345345');
    expect(entrarButton).toBeDisabled();

    userEvent.type(emailInput, 'test@mail.com');
    userEvent.type(passwordInput, '1234567');
    expect(entrarButton).not.toBeDisabled();
    userEvent.click(entrarButton);

    const { user: { email } } = store.getState();
    expect(email).toBe('test@mail.com');
    expect(history.location.pathname).toBe('/carteira');
  })
})