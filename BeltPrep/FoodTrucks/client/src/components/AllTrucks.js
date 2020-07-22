import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllTrucks = () => {
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/trucks")
            .then(response => {
                let allTrucks = response.data.results;
                allTrucks.map((truck, i)=>{
                    let sum = 0;
                    truck.reviews.map((review, i)=>{
                        sum += review.rating;
                        
                    });
                    if(truck.reviews.length > 0)
                        truck.avgRating = sum / truck.reviews.length;
                    else
                        truck.avgRating = 0;
                    
                });
                allTrucks.sort((a, b) => (a.avgRating < b.avgRating) ? 1 : -1);
                setTrucks(allTrucks);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            {
                trucks.map((truck, i) => 
                <div className="row" key={ i } >
                    <div className="col-sm-5 offset-sm-3">
                        <h3>{ truck.name }</h3>
                        <p>Style: { truck.style }</p>
                        <p>Average Rating: { truck.avgRating } star(war)s</p>
                    </div>
                    <div className="col-sm-4">
                        <Link to={`/truck/${truck._id}/edit`}><button className="col-sm-6 btn btn-primary">Edit</button></Link>
                        <Link to={`/truck/${truck._id}`}><button className="col-sm-6 btn btn-light">Review</button></Link>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default AllTrucks
