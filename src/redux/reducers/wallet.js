import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  REQUEST_API,
  SAVE_EDIT,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload, id, store }) => {
  switch (type) {
  case REQUEST_API:
    return {
      ...state,
      currencies: Object.keys(payload).filter((code) => code !== 'USDT'),
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id, ...store, exchangeRates: payload }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter((expense) => expense.id !== id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: id,
    };
  case SAVE_EDIT:
    state.expenses[id].value = store.value;
    state.expenses[id].description = store.description;
    state.expenses[id].method = store.method;
    state.expenses[id].tag = store.tag;
    state.expenses[id].currency = store.currency;
    return {
      ...state,
      expenses: [
        state.expenses[id],
        ...state.expenses.filter((expense) => expense.id !== id),
      ],
      editor: false,
    };
  default:
    return state;
  }
};

export default wallet;
