import { addFavorite } from './actions.types';

const initialState = {
  favorites: []
}

const setFavorites = (state, payload) => {
  return { ...state, favorites: [...state.favorites, {...payload}] }
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case addFavorite:
    return setFavorites(state, action.payload);
  default:
    return state
  }
}
