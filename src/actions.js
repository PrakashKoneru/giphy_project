import { addFavorite } from './actions.types';

const setGif = (payload) => {
  return ({
    type: addFavorite,
    payload
  });
}


export default setGif;