import { addFavorite } from './actions.types';

const initialState = {
  favorites: []
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case addFavorite:
    return { ...state, favorites: [...initialState.favorites, {...action.payload}] }
  default:
    return state
  }
}
