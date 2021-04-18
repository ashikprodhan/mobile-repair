import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetails = ({service}) => {    
const {imageUrl,name,price,_id}=service;

// console.log(name);
   
    

    return (
        <div className="col-md-4 text-center mt-1" >
            <img src={imageUrl} alt=""/>
            <h6>{name}</h6>
            <p>price: ${price}</p>
            
            <Link to={`/service/${_id}`}   className="btn btn-primary">Buy now</Link>
        </div>
    );
};

export default ServicesDetails;