import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const TruckForm = props => {
    const { action } = props;
    const [newTruck, setNewTruck] = useState({
        name: "",
        style: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        style: "",
        description: ""
    })

    useEffect(() => {
        if(action === "edit"){
            axios.get(`http://localhost:8000/api/trucks/${props.id}`)
                .then(response => {
                    if(response.data.message === "success")
                        setNewTruck(response.data.results)
                    else
                        navigate("/")
                })
        }
    },[])

    const submitHandler = e => {
        e.preventDefault();
        if(validate(newTruck)){
            if(action === "edit"){
                axios.patch(`http://localhost:8000/api/trucks/${props.id}`, newTruck)
                    .then(response => {
                        if(response.data.message === "success"){
                            navigate("/");
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                axios.post(`http://localhost:8000/api/trucks`, newTruck)
                    .then(response => {
                        if(response.data.message === "success"){
                            navigate("/");
                        }
                    })
                    .catch(err => console.log(err));
            }
        }
    }

    const changeHandler = e => {
        const curTruck = {
            ...newTruck,
            [e.target.name]: e.target.value
        }

        validate(curTruck);
        setNewTruck(curTruck);
    }

    const validate = truck => {
        let valid = false;
        const {...curErrors} = errors;
        if(truck.name.length === 0){
            curErrors.name = "This is a required field.";
        } else if(truck.name.length < 5) {
            curErrors.name = "Truck name must be at least 5 characters in length.";
        } else if(truck.name.length > 50){
            curErrors.name = "Yo, relax, that's way too many letters. Dial it back to under 50 characters.";
        } else {
            curErrors.name = "";
            valid = true;
        }

        if(truck.style.length === 0){
            curErrors.style = "This is a required field.";
        } else if(truck.style.length < 3) {
            curErrors.style = "Truck style must be at least 3 characters in length.";
        } else if(truck.style.length > 75){
            curErrors.style = "Yo, relax, that's way too many letters. Dial it back to under 75 characters.";
        } else {
            curErrors.style = "";
            valid = true;
        }

        if(truck.description.length === 0){
            curErrors.description = "This is a required field.";
        } else if(truck.description.length < 10) {
            curErrors.description = "Truck description must be at least 10 characters in length.";
        } else if(truck.description.length > 1000){
            curErrors.description = "Yo, relax, that's way too many letters. Dial it back to under 1000 characters.";
        } else {
            curErrors.description = "";
            valid = true;
        }

        setErrors(curErrors);

        return valid;
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/trucks/${props.id}`)
            .then(response => {
                if(response.data.message === "success"){
                    navigate("/")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="row">
                {
                    action === "edit" ?
                    <h3>Edit { newTruck.name }</h3>
                    :
                    <h3>New Food Truck</h3>
                }
            </div>
            <div className="row">
                <form className="col-sm-12" onSubmit={ submitHandler }>
                    <div className="form-group row">
                        {
                            errors.name ? 
                            <p className="col-sm-8 offset-sm-4 text-danger">{ errors.name }</p>
                            :
                            ''
                        }
                        <label htmlFor="name" className="col-sm-4">Name: </label>
                        <input 
                            type="text" 
                            name="name" 
                            className="col-sm-8 form-control"
                            onChange={ changeHandler }
                            value={ newTruck.name }
                        />
                    </div>
                    <div className="form-group row">
                        {
                            errors.style ? 
                            <p className="col-sm-8 offset-sm-4 text-danger">{ errors.style }</p>
                            :
                            ''
                        }
                        <label htmlFor="style" className="col-sm-4">Style: </label>
                        <input 
                            type="text" 
                            name="style" 
                            className="col-sm-8 form-control"
                            onChange={ changeHandler }
                            value={ newTruck.style }
                        />
                    </div>
                    <div className="form-group row">
                        {
                            errors.description ? 
                            <p className="col-sm-8 offset-sm-4 text-danger">{ errors.description }</p>
                            :
                            ''
                        }
                        <label htmlFor="description" className="col-sm-4">Description: </label>
                        <textarea 
                            type="text" 
                            name="description" 
                            className="col-sm-8 form-control"
                            onChange={ changeHandler }
                            value={ newTruck.description }
                        />
                    </div>
                    <div className="form-group row">
                        {
                            action === "edit" ?
                            <button className="col-sm-3 offset-sm-3 btn btn-danger" onClick={ e => deleteHandler(e, newTruck._id) }>Delete </button>
                            :
                            <div className="col-sm-6"></div>
                        }
                        <Link className="col-sm-3" to="/"><button className="col-sm-12 btn btn-secondary">Cancel</button></Link>
                        <input type="submit" value="Submit" className="col-sm-3 btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TruckForm;
