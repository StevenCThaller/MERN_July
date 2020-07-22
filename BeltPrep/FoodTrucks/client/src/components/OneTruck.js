import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneTruck = props => {
    const [truck, setTruck] = useState({
        name: "",
        style: "",
        description: "",
        reviews: []
    });
    const [review, setReview] = useState({
        name: "",
        review: "",
        rating: 0
    });
    const [errors, setErrors] = useState({
        name: "",
        review: "",
        rating: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trucks/${props.id}`)
            .then(response => {
                if(response.data.message == "success"){
                    let sum = 0;
                    let curTruck = response.data.results;
                    curTruck.reviews.map((review,i)=>{
                        sum += review.rating;
                    });
                    if(curTruck.reviews.length > 0)
                        curTruck.avgRating = sum / curTruck.reviews.length;
                    else
                        curTruck.avgRating = 0;
                    setTruck(curTruck);
                }else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }, [])
    
    const validate = curRev => {
        let valid = false;
        const {...curErr} = errors;

        if(curRev.name.length == 0){
            curErr.name = "This is a required field."
        } else if(truck.reviews.some(review => review.name == curRev.name)){
            curErr.name = "You already left a review. Stop.";
        } else if(curRev.name.length < 2){
            curErr.name = "Your name must be at least 2 characters long."
        } else if(curRev.name.length > 50) {
            curErr.name = "Your name can't be longer than 50 characters long."
        } else {
            curErr.name = "";
            valid = true;
        }

        if(curRev.review.length == 0){
            curErr.review = "This is a required field."
        } else if(curRev.review.length < 10){
            curErr.review = "Your review must be at least 10 characters long."
        } else if(curRev.review.length > 500) {
            curErr.review = "Your review can't be longer than 500 characters long."
        } else {
            curErr.review = "";
            valid = true;
        }

        if(curRev.rating < 0 || curRev.rating > 5) {
            curErr.rating = "Stop using the inspect tool, you tool.";
        } else {
            curErr.rating = "";
            valid = true;
        }

        setErrors(curErr);
        return valid;
    }   

    const changeHandler = e => {
        const curRev = {
            ...review,
            [e.target.name]: e.target.value
        }

        validate(curRev);
        setReview(curRev);
    }

    const submitHandler = e => {
        e.preventDefault();

        if(validate(review)){
            axios.patch(`http://localhost:8000/api/trucks/${props.id}/review`, review)
                .then(response => {
                    console.log(response);
                    if(response.data.message = "success"){
                        setTruck(response.data.results);
                    }
                    setReview({
                        name: "",
                        review: "",
                        rating: 0
                    })
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-10 offset-sm-2">
                    <h2>{ truck.name }</h2>
                    <p>Style: { truck.style }</p>
                    <p>Description: { truck.description }</p>
                    <p>Avg Rating: { truck.avgRating }</p>
                </div>
            </div>
            <div className="row revbox">
                {
                    truck.reviews.map((review, i) => 
                        <div className="col-sm-12" key={ i }>
                            <div className="row">
                                <div className="col-sm-4">
                                    <h5>{ review.name }</h5>
                                </div>
                                <div className="col-sm-8">
                                    <p>{ review.review }</p>
                                    <p>Rating: { review.rating }</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="row">
                <form className="row col-sm-12" onSubmit={ submitHandler }>
                    <div className="col-sm-8">
                        <div className="form-group row">
                            {
                                errors.name ?
                                <p className="col-sm-8 offset-sm-4 text-danger">{ errors.name }</p>
                                :
                                ""
                            }
                            <label htmlFor="name" className="col-sm-4">Name: </label>
                            <input 
                                type="text" 
                                name="name" 
                                className="col-sm-8 form-control"
                                onChange={ changeHandler }
                                value={ review.name }
                            />
                        </div>
                        <div className="form-group row">
                            {
                                errors.review ?
                                <p className="col-sm-8 offset-sm-4 text-danger">{ errors.review }</p>
                                :
                                ""
                            }
                            <label htmlFor="review" className="col-sm-4">Review: </label>
                            <textarea 
                                name="review" 
                                className="col-sm-8 form-control"
                                onChange={ changeHandler }
                                value={ review.review }
                            />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group row">
                            {
                                errors.rating ?
                                <p className="col-sm-8 offset-sm-4 text-danger">{ errors.rating }</p>
                                :
                                ""
                            }
                            <label htmlFor="rating" className="col-sm-4">Rating: </label>
                            <select 
                                name="rating" 
                                className="col-sm-8 form-control"
                                onChange={ changeHandler }
                                value={ review.rating }
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group row">
                            <Link to="/" className="col-sm-4 offset-sm-3"><button className="btn btn-secondary">Cancel</button></Link>
                            <input type="submit" value="Submit" className="col-sm-4 offset-sm-1 btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OneTruck
