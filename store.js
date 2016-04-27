const { createStore, applyMiddleware, combineReducers } = require('redux');
const { logger, thunk } = require('./middleware');
const reducers = require('./reducers');

module.exports = function createHexStore() {
  const createStoreWithMiddleware = applyMiddleware(
    thunk(),
    logger
  )(createStore);
  const store = createStoreWithMiddleware(reducers, {});
  return store;
}
