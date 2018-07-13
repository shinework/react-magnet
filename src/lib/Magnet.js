import React, { PureComponent } from "react";
import magnetize from "./magnetize";
import "./Magnet.css";

class Magnet extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    magnetize(this.myRef.current);
  }

  render() {
    return (
      <div {...this.props} ref={this.myRef}>
        {this.props.children}
      </div>
    );
  }
}

export default Magnet;
