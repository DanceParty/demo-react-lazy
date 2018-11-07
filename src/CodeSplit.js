import React, { lazy, Suspense } from "react";

const BarChart = lazy(() => import('./BarChart'))

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
          {
            this.state.showChart ? (
              <Suspense fallback={<p>Loading...</p>}>
                <BarChart />
              </Suspense>
            ) : null
          }
        </label>
      </div>
    );
  }
}

export default CodeSplit