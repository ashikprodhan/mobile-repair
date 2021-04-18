import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import img from '../../../images/001-dental.png'

const Review = () => {
   // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://rocky-chamber-96168.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="row" >
            {/* <h1> name : Ashik</h1>
            <p>great service</p> */}
            {
                reviews.map( review =>  <div className="card  col-md-4">
             
                    <p>{review.description}</p>
                    <div>
                        <h4><b>{review.name}</b></h4>
                        <p> <small>{review.designation}</small> </p>
                    </div>
                    </div> )
            }
           
            </div>
    );
};

export default Review;