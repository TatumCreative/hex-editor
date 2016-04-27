const { DOM, createClass, PropTypes, createFactory } = require("react");
const ByteHexValue = createFactory(require("./byte-hex-value"))

const Row = module.exports = createClass({
  render() {
    const {
      buffer,
      offset,
      columnLength,
      columnPeriod,
      index
    } = this.props;

    const length = Math.min(columnLength, buffer.byteView.length - offset);
    if(length <= 0) {
      return null;
    }
    const children = Array(length);
    for(var i=0; i < length; i++) {
      children[i] = ByteHexValue({
        value: buffer.byteView[offset + i],
        isLastInGroup: (i + 1) % columnPeriod === 0,
        key: i
      });
    }
    const oddity = (index % 2 === 0) ? "even" : "odd";
    let className = `hex-byte-row ${oddity}`;

    return DOM.div({ className }, children);
  }
})
