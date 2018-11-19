import { takeEvery, call, all, put, select } from 'redux-saga/effects'
import { fetchData, updateData, setFavorite } from './actions.types';
import axios from 'axios';

const submitSearchTerm = (payload) => axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${payload}`)

function* fetchDataSaga({ type, payload }) {
  const { data:{ data } } = yield call(submitSearchTerm, payload);
  yield put({ type: updateData, payload: data });
}

function* setFavoriteSaga({ type, payload }) {
  let gifs = yield select(state => state.results);
  gifs.map((gif) => {
    if(gif.id === payload.id) {
      gif.favorited = !gif.favorited;
    }
    return gif;
  })
  yield put({ type: updateData, payload: gifs });
}

export default function* rootSaga() {
  yield all([
    takeEvery(fetchData, fetchDataSaga),
    takeEvery(setFavorite, setFavoriteSaga)
  ])
}