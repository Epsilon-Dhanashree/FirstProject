import React from 'react';
import {Carousel} from 'react-bootstrap'

const Slider =(props)=>{
    const {items} = props;

    return(
        <div>
           {items.brand}
        </div>
    )   
}


export default Slider;