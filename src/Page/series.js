import React, { Component } from 'react';
import Header from '../header';
import Page from './page';

class Series extends Component{
    constructor(props){
        super(props);
        this.state={data:'',err:""}
    }
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        .then(res =>res.json())
        .then(res => 
            {
                console.log(res)
                res = res.entries.filter(r =>{
                   return  r.programType =="series" && r.releaseYear >= 2010
                })
                res=res.slice(0,10)
                res.sort(function(a, b) {
                    var textA = a.title.toUpperCase();
                    var textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
                this.setState({data:res})
            })
            .catch(err => this.setState({err:"Oops.something went wrong"}))
    }
    render(){
        console.log(this.state.data)
        return<div>
            <Header heading="Popular Series" />
            {this.state.data ? <Page data={this.state.data} />: <div>Loading</div>}
            {this.state.err ? <div>{this.state.err}</div>:""}
        </div>
    }

}
export default Series