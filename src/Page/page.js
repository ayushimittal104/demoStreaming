import React, { Component } from 'react';
import Item from './Item';

class Page extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.data)
        return<div style={{display:"flex",flexWrap:"wrap",margin:"20px",justifyContent:"center"}}>
            {this.props.data.map(d => {return (<Item key={d.title} i={d}/>)})}
        </div>
    }

}
export default Page