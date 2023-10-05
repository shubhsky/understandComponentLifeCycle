import React from "react";
// import TimerOne from "./Components/Timer/TimerOne";
import ComponentA from "./Components/Component/ComponentA";
import ComponentB from "./Components/Component/ComponentB"
import ErrorBoundary from "./ErrorBoundary";


class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     timerOn:false
  //   }
  // }

  // handleTimerOn = ()=>{
  //   this.setState((prevState)=>({timerOn:!prevState.timerOn}))
  // }

  render(){
    return (
      <>
        {/* <TimerOne timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn}>{this.state.timerOn?'STOP':'START'}</button> */}
        <ErrorBoundary>
          <ComponentA/>
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB/>
        </ErrorBoundary>
      </>
      
    );
  }
}

export default App;
