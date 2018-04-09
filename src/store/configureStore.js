import {createStore} from 'redux';
import schedulesReducer from '.././reducers/schedulesReducers';

export default function configureStore(initialState) {
  return createStore(
    schedulesReducer,
    initialState
  );
}