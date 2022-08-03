import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const minCharPass = 6;
      const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      // regex usado desta fonte: https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,%5D%2B)*%24%2F.
      const isValidPassword = password.length >= minCharPass;
      if (isValidEmail && isValidPassword) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  };

  handleClick = () => {
    const { email } = this.state;
    const { history, emailDispatch } = this.props;
    emailDispatch(email);
    history.push('/trybewallet/carteira');
  };

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="login">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <h2>Trybewallet</h2>
          <h3>Login Here</h3>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <button type="button" disabled={ disabled } onClick={ this.handleClick }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
