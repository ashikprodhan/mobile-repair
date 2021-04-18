import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import img from '../../../images/001-dental.png'

const reviewData = [
    {
        name: 'Ashik',
        designation: 'Student',
        description: 'Great service'
    },
    {
        name: 'Shakib',
        designation: 'Student',
        description: 'Much more better  service'
    },
    {
        name: 'Ranga',
        designation: 'Student',
        description: 'Reasonable price service'
    }
]

const Review = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="row" >
            {/* <h1> name : Ashik</h1>
            <p>great service</p> */}
            {
                reviews.map( review =>  <div className="card m-1  col-md-4">
             
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