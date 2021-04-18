import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        
        <div >
            <h5 className="text-center  text-primary mb-5">Our Reviews</h5>
            {/* <div className="row d-flex ">
                <Review/>
                
            </div> */}
             <Review/>
        </div>
  
    );
};

export default Reviews;