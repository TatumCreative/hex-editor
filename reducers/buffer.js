const { actions } = require('../constants');
const handlers = Object.create(null);

handlers[actions.SET_BUFFER] = function (_, { buffer, defaultView, view, byteView }) {
  return {
    buffer,
    defaultView,
    byteView,
    view,
  };
};

module.exports = function (buffer = {}, action) {
  const handler = handlers[action.type];
  return handler ? handler(buffer, action) : buffer;
};
