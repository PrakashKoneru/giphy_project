import { setFavorite, fetchData } from './actions.types';

export const setFavoriteAction = (payload) => {
  return ({
    type: setFavorite,
    payload
  });
}

export const fetchDataAction = (payload) => {
  return ({
    type: fetchData,
    payload
  });
}
