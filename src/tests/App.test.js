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
    expect(screen.getByRole('button', { name: 'Entrar'})).toBeDisabled()
    userEvent.type(screen.getByTestId('email-input'), 'test@test.com')
    userEvent.type(screen.getByTestId('password-input'), '123')
    expect(screen.getByRole('button', { name: 'Entrar'})).toBeDisabled()
    userEvent.type(screen.getByTestId('email-input'), 'test@test.com')
    userEvent.type(screen.getByTestId('password-input'), '1234567')
    expect(screen.getByRole('button', { name: 'Entrar'})).not.toBeDisabled()
    userEvent.click(screen.getByRole('button', { name: 'Entrar'}))
  })

  test('test wallet page', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState })
    expect(screen.getByTestId('value-input')).toBeInTheDocument()
    expect(screen.getByTestId('description-input')).toBeInTheDocument()
    expect(screen.getByTestId('currency-input')).toBeInTheDocument()
    expect(screen.getByTestId('method-input')).toBeInTheDocument()
    expect(screen.getByTestId('tag-input')).toBeInTheDocument()

    userEvent.type(screen.getByTestId('value-input'), '123')
    expect(screen.getByTestId('value-input')).toHaveAttribute('value', '123')
    userEvent.type(screen.getByTestId('description-input'), 'qwe')
    expect(screen.getByTestId('description-input')).toHaveAttribute('value', 'qwe')
    userEvent.click(screen.getByTestId('add-expense'))
    userEvent.click(screen.getByTestId('edit-btn'))
    userEvent.type(screen.getByTestId('value-input'), '123')
    userEvent.type(screen.getByTestId('description-input'), 'qwe')
    userEvent.click(screen.getByTestId('save-edit'))

    userEvent.click(screen.getByTestId('delete-btn'))

  })
})