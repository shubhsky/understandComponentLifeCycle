import React from "react";

class TimerOne extends React.Component{
    constructor(){
        super();
        this.state = {
            time : 0
        }
        this.timer = null; 
        console.log('TimerOne Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('TimerOne getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('should componet update')
        console.log('nextProps', nextProps);
        console.log('nextState', nextState)
        console.log(this.state.time)

        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
    }

    render(){
        console.log('TimerOne render')
        return (
            <>
                <h1>Time Spent-{new Date(this.state.time * 1000).toISOString().slice(11,19)}</h1>
            </>
        )
    }

    componentDidMount(){
        console.log('TimerOne ComponentDidMount');
        console.log('----------------------------------------------');

        // this.timer = setInterval(()=>{
        //     this.setState((prevState)=>({time:prevState.time+1}))
        // },1000)
    }

    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('Timer One getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('TimerOne componentDidUpdate');
        console.log('----------------------------------------------');
        console.log(this.props.timerOn)
        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState((prevState)=>({time:prevState.time+1}))
                },1000)
            }
            else{
                clearInterval(this.timer)
            }
        }
    }

    componentWillUnmount(){
        console.log('TimerOne ComponentWillUnmount')
        // clearInterval(this.timer)
    }

}

export default TimerOne