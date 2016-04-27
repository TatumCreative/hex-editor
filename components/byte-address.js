const { DOM, createClass, PropTypes, createFactory } = require("react");
const ByteHexValue = createFactory(require("./byte-hex-value"))

const Row = module.exports = createClass({
  render() {
    const { offset } = this.props;

    const className = "hex-byte-address";
    return DOM.div({ className }, DOM.span({}, offset));
  }
})
