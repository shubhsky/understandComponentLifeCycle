import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={
            name:'ComponentA'
        }
        console.log('Component A constructor')
        // this.setState({
        //     name:'CA'
        // })
    }

    static getDerivedStateFromProps(){
        console.log('Component A getDerivedStateFromProps');
        // this.setState({
        //     name:'CA'
        // })
        return null;
    }

    componentDidMount(){
        console.log('Component A component did mount')
    }

    render(){
        console.log('Component A render')
        // this.setState({
        //     name:'CA'
        // })
        return(
            <>
                <h1>{this.state.name}</h1>  
                <ComponentB/>
            </>
        )
    }
}

export default ComponentA