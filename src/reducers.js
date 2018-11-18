import { addFavorite } from './actions.types';

const initialState = {
  favorites: []
}

const setFavorites = (state, payload) => {
  let uniqFavorites;
  const checkPayload = state.favorites.find((gif) => gif.id === payload.id);
  if (checkPayload) {
    uniqFavorites = state.favorites.filter((gif) => gif.id !== payload.id)
  } else {
    uniqFavorites = [...state.favorites, {...payload}]
  }
  return { ...state, favorites: [...uniqFavorites] }
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case addFavorite:
    return setFavorites(state, action.payload);
  default:
    return state
  }
}
