const { actions } = require("../constants");


/**
 * Set the current buffer, defaultView, and current active view. A buffer
 * without a view defaults to Int8Array
 *
 * @param {input} ArrayBuffer or TypedArray
 */
exports.setBuffer = function (input) {
  return ({ dispatch, getState }) => {

    if(input.constructor === ArrayBuffer) {
      const byteView = new Int8Array(input);
      return dispatch({
        type: actions.SET_BUFFER,
        buffer: input,
        defaultView: Int8Array,
        byteView: byteView,
        view: byteView,
      })
    }

    const byteView = input.constructor === Int8Array
      ? input
      : new Int8Array(input.buffer);

    return dispatch({
      type: actions.SET_BUFFER,
      buffer: input.buffer,
      defaultView: input.constructor,
      byteView: byteView,
      view: input,
    })
  };
};
