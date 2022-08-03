export const USER_TYPE = 'USER_TYPE';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDIT = 'SAVE_EDIT';

export const userAction = (email) => ({
  type: USER_TYPE,
  email,
});

export const requstApiAction = (payload) => ({
  type: REQUEST_API,
  payload,
});

export const addExpenseAction = (id, store, payload) => ({
  type: ADD_EXPENSE,
  payload,
  id,
  store,
});

export const deleteExpenseAction = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpenseAction = (id) => ({
  type: EDIT_EXPENSE,
  id,
});

export const saveEditAction = (id, store) => ({
  type: SAVE_EDIT,
  id,
  store,
});

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(requstApiAction(data));
};

export const addExpenseFetch = (id, store) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(addExpenseAction(id, store, data));
};
