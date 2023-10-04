import React from "react";

class TimerOne extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        console.log('TimerOne Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('TimerOne getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    handleIncrease = () =>{
        this.setState((prevState)=>{
            return {count:prevState.count + 1}
        })
    }

    render(){
        console.log('TimerOne render')
        return (
            <>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrease}>Increase</button>
            </>
        )
    }

    componentDidMount(){
        console.log('TimerOne ComponentDidMount');
        console.log('----------------------------------------------');
    }

    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('Timer One getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('TimerOne componentDidUpdate');
        console.log('----------------------------------------------');
    }

}

export default TimerOne