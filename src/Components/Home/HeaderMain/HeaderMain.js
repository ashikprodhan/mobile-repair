import React from 'react';
import img from '../../../images/header-bg-test.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'300px'}} className="row d-flex align-items-center" >
        <div className="col-md-4 offset-md-1">
            <h1>Bring your gadget <br/> back to life</h1>
            <p className="text-secondary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, doloremque.</p>
            <button className="btn btn-primary">Get appointment</button>
        </div>
        <div className="col-md-6">
            <img className="img-fluid" style={{height:'200px'}}  src={img} alt=""/>
            </div>  
      </main>
    );
};

export default HeaderMain;