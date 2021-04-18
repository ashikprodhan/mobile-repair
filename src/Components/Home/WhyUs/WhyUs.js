
import React from 'react';
import professional from '../../../images/architect.png'
import lowCost from '../../../images/affordable.png'
import fast from '../../../images/stopwatch.png'
import './WhyUs.css'


const WhyUs = () => {
    return (
        <section className="whyContainer" >
            <h2 className="text-center" >Why Choose Us</h2>
            <p className="text-center">Here are just a few reasons to choose
      <strong>Phone Repair</strong> for all of your digital marketing
      needs</p>
      <div className="row d-flex">
         <div className="col-md-4 ">
          <div className=" justify-content-around align-items-center" >
          <div>
            <img src={professional} alt=""/>
            </div>
            <div>
                <h6>Professional</h6>
                <small>Best service </small>
            </div>
          </div>
         </div>
         <div className="col-md-4 ">
          <div className=" justify-content-around align-items-center" >
          <div>
            <img src={lowCost} alt=""/>
            </div>
            <div>
                <h6>affordable</h6>
                <small>Cost is reasonable </small>
            </div>
          </div>
         </div>
         <div className="col-md-4 ">
          <div className=" justify-content-around align-items-center" >
          <div>
            <img src={fast} alt=""/>
            </div>
            <div>
                <h6>Fast</h6>
                <small>On time delivery</small>
            </div>
          </div>
         </div>
       
          
      </div>
           
        
        </section>
    );
};

export default WhyUs;