import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenseFetch, fetchAPI, saveEditAction } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };
  }

  componentDidMount() {
    const { fetchDispatch } = this.props;
    fetchDispatch();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { dispatchExpense, expenses, editor, dispatchSaveEdit, idToEdit } = this.props;
    const idIndex = expenses.length;
    if (editor) {
      dispatchSaveEdit(idToEdit, this.state);
      this.setState({
        value: '',
        description: '',
      });
    } else {
      dispatchExpense(idIndex, this.state);
      this.setState({
        value: '',
        description: '',
      });
    }
  };

  render() {
    const { value, description, method, tag, currency } = this.state;
    const { currencies, editor } = this.props;
    return (
      <form className="wallet-form">
        <label htmlFor="value" className="omrs-input-filled">
          Valor
          <input
            id="value"
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            min="0"
          />
          <span className="omrs-input-helper">Valor gasto na moeda local</span>
        </label>
        <label htmlFor="description" className="omrs-input-filled">
          Descrição
          <input
            id="description"
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <span className="omrs-input-helper">
            Descreva informações sobre o gasto
          </span>
        </label>
        <label htmlFor="currency">
          Moeda usada
          <select
            id="currency"
            data-testid="currency-input"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {currencies.map((code) => (
              <option key={ code }>{code}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Meio usado
          <select
            id="method"
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {editor ? (
          <button
            data-testid="save-edit"
            type="button"
            onClick={ this.handleClick }
          >
            Editar despesa
          </button>
        ) : (
          <button
            data-testid="add-expense"
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        )}
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  dispatchSaveEdit: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  fetchDispatch: PropTypes.func.isRequired,
  idToEdit: PropTypes.number.isRequired,
};

const mapStateToProps = ({
  wallet: { currencies, expenses, editor, idToEdit },
}) => ({
  currencies,
  expenses,
  editor,
  idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDispatch: () => dispatch(fetchAPI()),
  dispatchExpense: (id, state) => dispatch(addExpenseFetch(id, state)),
  dispatchSaveEdit: (id, state) => dispatch(saveEditAction(id, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
