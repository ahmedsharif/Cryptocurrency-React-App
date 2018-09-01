import { createStore } from 'redux';
import userReducer from "../reducers/users";


export default () => {
  const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};