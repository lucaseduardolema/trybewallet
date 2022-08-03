import React from "react"
import { renderWithRouterAndRedux } from "./helpers/renderWith"
import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import Wallet from "../pages/Wallet"
import mockData from "./helpers/mockData"

beforeEach(async () => {
  window.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
})

describe('Star test 2', () => {
  test('WalletForm component', async () => {
    const { store } = renderWithRouterAndRedux(<Wallet />)
    await waitFor(() => {})
    
    expect(window.fetch).toBeCalledWith('https://economia.awesomeapi.com.br/json/all')

    const descriptionInput = screen.getByTestId('description-input')
    const currencyInput = screen.getByTestId('currency-input')
    const methodInput = screen.getByTestId('method-input')
    const valueInput = screen.getByTestId('value-input')
    const tagInput = screen.getByTestId('tag-input')

    expect(descriptionInput).toBeInTheDocument()
    expect(currencyInput).toBeInTheDocument()
    expect(methodInput).toBeInTheDocument()
    expect(valueInput).toBeInTheDocument()
    expect(tagInput).toBeInTheDocument()

    expect(methodInput).toContainHTML('Cartão de crédito')
    expect(methodInput).toContainHTML('Cartão de débito')
    expect(methodInput).toContainHTML('Dinheiro')

    expect(tagInput).toContainHTML('Alimentação')
    expect(tagInput).toContainHTML('Transporte')
    expect(tagInput).toContainHTML('Trabalho')
    expect(tagInput).toContainHTML('Lazer')
    expect(tagInput).toContainHTML('Saúde')

    const currencies = store.getState().wallet.currencies.includes(
      'USD', 'CAD', 'EUR',
      'GBP', 'ARS', 'BTC',
      'LTC', 'JPY', 'CHF',
      'AUD', 'CNY', 'ILS',
      'ETH', 'XRP', 'DOGE'
    )
    
    expect(currencies).toBeTruthy()
  })
})