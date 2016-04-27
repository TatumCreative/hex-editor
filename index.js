const { createFactory, createElement } = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { setBuffer } = require("./actions/buffer");
const loremBuffer = require("./lorem");
const createStore = require('./store');
const App = createFactory(require('./components/app'));

(function main() {
  const store = createStore();
  setInitialBuffer(store.dispatch);

  render(
    createElement(Provider, { store }, App()),
    document.querySelector("#hex")
  );
})();

function setInitialBuffer (dispatch) {
  // const buffer = new Int8Array(64);
  // for(var i=0; i < buffer.length; i++) {
  //   buffer[i] = i;
  // }
  dispatch(setBuffer(loremBuffer));
}
