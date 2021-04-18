import React, { useEffect, useState } from 'react';
import dental from '../../../images/001-dental.png'
import ServicesDetails from '../../Home/ServicesDetails/ServicesDetails';
import './Services.css'


const Services = () => {
    
    const [service, setService] = useState([]);
    // console.log(service);
    useEffect(()=>{
        fetch('https://rocky-chamber-96168.herokuapp.com/services')
        .then(res =>res.json())
        .then(data => setService(data))
    },[service])
    return (
        <section className="serviceContainer" >
         
            <div className="text-center mt-2"><h2>Our services</h2></div>
            <div>
            <div className="row ">
           {
                service.map(service => <ServicesDetails key={service._id} service={service} ></ServicesDetails> )
            }
           </div>
            </div>
        </section>
    );
};

export default Services;