import React from 'react';

const Item = (props) =>{
    console.log(props.i)
    return(
        <div style={{margin:"10px"}}>
            <div><img width="100" height="200" src={props.i.images['Poster Art'].url} alt={props.i.title} /></div>
            <div style={{maxWidth: "100px"}}>{props.i.title}</div>
        </div>)

}
export default Item