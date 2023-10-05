import React from "react";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={
            name:'ComponentA',
            data:[]
        }
        console.log('Component A constructor')
    }

    static getDerivedStateFromProps(){
        console.log('Component A getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('Component A component did mount')
        fetch('https://jsonplaceholder.typicode.com/user')
            .then(response => response.json())
                .then(data => this.setState({data}))
    }

    render(){
        console.log('Component A render')
        return(
            <>
                <h1>{this.state.name}</h1>
                <ul>
                    {this.state.data.map((d,index)=>{
                        return(
                            <li key={index}>{d.name}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default ComponentA