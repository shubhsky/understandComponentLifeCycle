import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={
            name:'ComponentA',
            data:[]
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

    // https://jsonplaceholder.typicode.com/users

    componentDidMount(){
        console.log('Component A component did mount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(data => this.setState({data}))
    }

    render(){
        console.log('Component A render')
        // console.log(this.state.data)
        // this.setState({
        //     name:'CA'
        // })
        return(
            <>
                <h1>{this.state.name}</h1>
                <ul>
                    {this.state.data.map((d)=>{
                        return(
                            <li>{d.name}</li>
                        )
                    })}
                </ul>
                <ComponentB/>
            </>
        )
    }
}

export default ComponentA