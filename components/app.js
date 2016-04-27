const { DOM, createClass, PropTypes, createFactory } = require("react");
const { connect } = require("react-redux");
const ByteView = createFactory(require("./byte-view"));

const HexApp = createClass({
  getDefaultProps() {
    return {};
  },

  render() {
    const { buffer } = this.props;

    if(!buffer.buffer) {
      return DOM.div({}, "Awaiting a buffer");
    }
    return ByteView({ buffer });
  }
});


/**
 * Passed into react-redux's `connect` method that is called on store change
 * and passed to components.
 */
function mapStateToProps (state) {
  return state;
}

module.exports = connect(mapStateToProps)(HexApp);
