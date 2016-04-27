const { DOM, createClass, PropTypes, createFactory } = require("react");
const ByteRow = createFactory(require("./byte-row"));
const ByteAddress = createFactory(require("./byte-address"));

const ByteView = module.exports = createClass({
  render() {
    const {
      buffer
    } = this.props;

    const columnPeriod = 4;
    const columnLength = 16;
    const rowLength = 16;

    const rows = Math.max(
      Math.ceil(buffer.byteView.length / columnLength),
      rowLength
    );

    const byteRows = Array(rows);
    const addresses = Array(rows);
    for(var i=0; i < rows; i++) {
      const offset = i * columnLength;
      addresses[i] = ByteAddress({
        offset,
        key: i
      })
      byteRows[i] = ByteRow({
        buffer,
        key: i,
        index: i,
        offset,
        columnPeriod,
        columnLength
      });
    }

    const className = "hex-view";

    return DOM.div({ className }, [
      DOM.div({ className: "hex-column" }, addresses),
      DOM.div({ className: "hex-column" }, byteRows)
    ]);
  }
})
