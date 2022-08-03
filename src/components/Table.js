import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpenseAction, editExpenseAction } from '../redux/actions';

class Table extends Component {
  handleClick = ({ target: { name, value } }) => {
    const { deleteDispatch, editDispatch } = this.props;
    value = parseInt(value, 10);
    if (name === 'delete') {
      deleteDispatch(value);
    }
    if (name === 'edit') {
      editDispatch(value);
    }
  };

  render() {
    const { expenses } = this.props;
    return (
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Valor</th>
              <th>Descrição</th>
              <th>Moeda</th>
              <th>Método de pagamento</th>
              <th>Tag</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({
                id,
                value,
                description,
                method,
                tag,
                currency,
                exchangeRates,
              }) => (
                <tr key={ id }>
                  <td>{value.includes('.') ? value : `${value}.00`}</td>
                  <td>{description}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{method}</td>
                  <td>{tag}</td>
                  <td>
                    {Math.round(parseFloat(exchangeRates[currency].ask) * 100)
                    / 100}
                  </td>
                  <td>
                    {Math.round(
                      parseFloat(exchangeRates[currency].ask)
                      * parseFloat(value)
                      * 100,
                    ) / 100}
                  </td>
                  <td>Real</td>
                  <td className="edi-del-buttons">
                    <button
                      className="edit-btn"
                      data-testid="edit-btn"
                      name="edit"
                      value={ id }
                      type="button"
                      onClick={ this.handleClick }
                    >
                      Editar
                    </button>
                    <button
                      className="delete-btn"
                      data-testid="delete-btn"
                      name="delete"
                      value={ id }
                      type="button"
                      onClick={ this.handleClick }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  deleteDispatch: PropTypes.func.isRequired,
  editDispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (id) => dispatch(deleteExpenseAction(id)),
  editDispatch: (id) => dispatch(editExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
