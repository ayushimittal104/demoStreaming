import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let style={backgroundColor:"black",height:"200px",width:"150px",margin:"20px",position:"relative"};
        let txt={color:"white",textDecoration:"none",textAlign:"center"};
        let txt1={left: "32%",position: "absolute",top: "40%",fontSize:"20px"}
        return<div>
            <Header heading="Popular Titles" />
            <div className="df" style={{margin:"20px"}}>
                <div style={style}>
                    <Link style={txt} to="/series"><div style={txt1}>Series</div></Link>
                    <div >Popular Series</div>
                </div>
                <div style={style}>
                    <Link style={txt} to="/movies"><div style={txt1}>Movies</div></Link>
                    <div>Popular Movies</div>
                </div>
            </div>
        </div>
    }

}
export default Home