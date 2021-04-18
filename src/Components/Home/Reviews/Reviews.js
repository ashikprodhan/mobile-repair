import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <section className="doctors">
        <div className="container">
            <h5 className="text-center  text-primary mb-5">Our Reviews</h5>
            {/* <div className="row d-flex ">
                <Review/>
                
            </div> */}
             <Review/>
        </div>
    </section>
    );
};

export default Reviews;