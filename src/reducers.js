import { updateData } from './actions.types';

const initialState = {
  results: []
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case updateData:
    return { ...state, results: action.payload };
  default:
    return state
  }
}
