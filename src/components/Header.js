import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header className="flex-container">
        <div className="projec-name">
          <h1>
            <span>Trybe</span>
            wallet
          </h1>
        </div>
        <div className="user-info">
          <p data-testid="email-field">{email}</p>
          <div className="display-values">
            <p>Total gasto</p>
            <p data-testid="total-field">
              { !expenses.length > 0 ? '0.00' : (
                expenses.reduce((acc, { currency, exchangeRates, value }) => {
                  acc += (parseFloat(exchangeRates[currency].ask * value));
                  return acc;
                }, 0)
              ).toFixed(2) }
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps, null)(Header);
