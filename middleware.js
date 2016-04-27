"use strict";

/**
 * A simple logger middleware
 */
exports.logger = function logger({ getState }) {
  return (next) => (action) => {
    console.log('[DISPATCH]', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('[STATE---]', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

/**
 * A middleware that allows thunks (functions) to be dispatched. If
 * it's a thunk, it is called with an argument that contains
 * `dispatch`, `getState`, and any additional args passed in via the
 * middleware constructure. This allows the action to create multiple
 * actions (most likely asynchronously).
 */
exports.thunk = function(makeArgs) {
  return ({ dispatch, getState }) => {
    const args = { dispatch, getState };

    return next => action => {
      return (typeof action === "function")
        ? action(makeArgs ? makeArgs(args) : args)
        : next(action);
    };
  };
}
