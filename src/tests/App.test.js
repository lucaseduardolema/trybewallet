import React from "react"
import App from "../App"
import { renderWithRouterAndRedux } from "./helpers/renderWith"
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import Wallet from "../pages/Wallet"
import mockData from "./helpers/mockData"
import initialState from "./helpers/initialState"


describe('Test App', () => {

  window.fetch = jest.fn(async () => ({
    json: async () => mockData,
  }));

  afterEach(() => jest.clearAllMocks());

  test('test login page', async () => {
    renderWithRouterAndRedux(<App />)
    const button = screen.getByRole('button', { name: 'Entrar'});
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    expect(button).toBeDisabled();

    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, '123');

    expect(button).toBeDisabled();

    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, '1234567');

    expect(button).not.toBeDisabled();

    userEvent.click(button);
  });

  test('test wallet page', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState })
    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(screen.getByTestId('currency-input')).toBeInTheDocument();
    expect(screen.getByTestId('method-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-input')).toBeInTheDocument();

    userEvent.type(valueInput, '123');

    expect(valueInput).toHaveAttribute('value', '123');

    userEvent.type(descriptionInput, 'qwe');

    expect(descriptionInput).toHaveAttribute('value', 'qwe');

    userEvent.click(screen.getByTestId('add-expense'));
    userEvent.click(screen.getByTestId('edit-btn'));

    userEvent.type(valueInput, '123');
    userEvent.type(descriptionInput, 'qwe');

    userEvent.click(screen.getByTestId('save-edit'));
    userEvent.click(screen.getByTestId('delete-btn'));
  });
});