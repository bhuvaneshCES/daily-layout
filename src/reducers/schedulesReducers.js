import initialState from './initialState';

export default function schedulesReducer(state = initialState.schedules, action) {
  switch (action.type) {
    case 'SUCCESS':
      return action.schedules;

    default:
      return state;
  }
}
