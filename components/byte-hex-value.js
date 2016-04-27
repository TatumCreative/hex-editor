const { DOM, createClass, PropTypes } = require("react");
const LETTERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b",
                 "c", "d", "e", "f"];

function intToHex(intVal) {
  const a = intVal >> 4;
  const b = intVal & 0x0f;
  return LETTERS[a] + LETTERS[b];
}

const ByteHexValue = module.exports = createClass({

  render() {
    const { value, isLastInGroup } = this.props;

    let className = "byte-hex-value" + (isLastInGroup ? " last" : "");

    return DOM.span({ className }, intToHex(value));
  }
});
