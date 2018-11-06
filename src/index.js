import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./BarChart";

class CodeSplit extends React.Component {
  state = {
    showChart: false
  };

  toggleCheckbox = () => {
    this.setState(({ showChart }) => ({
      showChart: !showChart
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello CTS!</h1>
        <label>
          Show Bar Chart
          <input
            type="checkbox"
            value={this.state.showChart}
            onChange={this.toggleCheckbox}
          />
          {this.state.showChart ? <BarChart /> : null}
        </label>
      </div>
    );
  }
}

ReactDOM.render(<CodeSplit />, document.getElementById("root"));
