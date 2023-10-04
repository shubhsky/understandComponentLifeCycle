import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();
        this.state={
            name:'ComponentB'
        }
        console.log('ComponentB constructor')
        // this.setState({
        //     name:'CB'
        // })
    }

    static getDerivedStateFromProps(){
        console.log('ComponentB getDerivedStateFromProps');
        // this.setState({
        //     name:'CB'
        // })
        return null;
    }

    componentDidMount(){
        console.log('ComponentB component did mount')
    }

    render(){
        console.log('ComponentB render')
        // this.setState({
        //     name:'CB'
        // })
        return(
            <h2>{this.state.name}</h2>
        )
    }
}

export default ComponentB