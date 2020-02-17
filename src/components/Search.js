import React, { Component } from "react";
import Rate from "./Rate";
export default class Search extends Component {
  state = {
    inputValue: "",
    rateIndex: 0
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <input
          type="text"
          onChange={e => {
            this.setState({ inputValue: e.target.value }, () =>
              this.props.search(this.state.inputValue)
            );
          }}
        />
        <Rate
          starIndex={x =>
            this.setState({ rateIndex: x }, () =>
              this.props.starInd(this.state.rateIndex)
            )
          }
          rate={this.state.rateIndex}
        />
      </div>
    );
  }
}
