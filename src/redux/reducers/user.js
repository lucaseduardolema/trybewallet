import { USER_TYPE } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, email }) => {
  switch (type) {
  case USER_TYPE:
    return {
      email,
    };
  default:
    return state;
  }
};

export default user;
