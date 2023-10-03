import React from "react";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={
            name:'ComponentA'
        }
        console.log('Component A constructor')
    }

    static getDerivedStateFromProps(){
        console.log('Component A getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('Component A component did mount')
    }

    render(){
        console.log('Component A render')
        return(
            <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentA