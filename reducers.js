const { combineReducers } = require('redux');

module.exports = combineReducers({
  buffer: require('./reducers/buffer')
});
