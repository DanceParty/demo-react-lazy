import React from "react";
import BarChart from "./BarChart";

class NotCodeSplit extends React.Component {
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

export default NotCodeSplit
