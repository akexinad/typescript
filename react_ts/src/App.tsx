import React, { Component } from "react";

import { CounterOutput } from "./CounterOutput";

// interface AppProps { }

interface AppState {
  counterValue: number;
}

export class App extends Component<{}, AppState> {

  public state = {counterValue: 0};

  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <CounterOutput counter={ this.state.counterValue } />
        <button onClick={ this.incHandler }>Increment</button>
        <button onClick={ this.decHandler }>Decrement</button>
      </div>
    );
  }

  private incHandler = () => {
    this.setState((prevState: AppState) => {
      return {
        counterValue: prevState.counterValue + 1
      };
    });
  }

  private decHandler = () => {
    this.setState((prevState: AppState) => {
      return {
        counterValue: prevState.counterValue - 1
      };
    });
  }
}
