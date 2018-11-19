import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './main';
import Favorites from './components/favorites';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main>
            <Route path="/favorites" component={Favorites}/>
          </Main>
        </Router>
      </Provider>
    )
  }
}

export default Routes;