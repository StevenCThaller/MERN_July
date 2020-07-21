import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import { navigate } from '@reach/router';

const EditUser = props => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const changeHandler = e => {
        const curData = {
            ...user,
            [e.target.name]: e.target.value
        };

        validate(curData);
        setUser(curData);
    }

    const validate = data => {
        const { ...curErrors } = errors;
        const eReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(data.name.length == 0) {
            curErrors.name = "This is a required field."
        } else if(data.name.length < 2) {
            curErrors.name = "Name must be at least 2 characters long."
        } else if(data.name.length > 100) {
            curErrors.name = "Server space ain't free, yo."
        } else {
            curErrors.name = "";
        }

        if(data.email.length == 0) {
            curErrors.email = "Email is required."
        } else if(data.email.length < 7) {
            curErrors.email = "That can't possibly be an email address.";
        } else if(!eReg.test(data.email)) {
            curErrors.email = "Invalid email address."
        } else {
            curErrors.email = "";
        }

        if(data.password.length == 0){
            curErrors.password = "Required field.";
        } else if(data.password.length < 8) {
            curErrors.password = "Password must be at least 8 characters long."
        } else {
            curErrors.password = "";
        }

        setErrors(curErrors);
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${props.id}`)
            .then(response => {
                setUser(response.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const submitData = () => {
        axios.put(`http://localhost:8000/api/users/${props.id}`, user)
            .then(response => {
                console.log(response);
                if(response.data.message == "success"){
                    setUser({
                        name: "",
                        email: "",
                        password: ""
                    })
                    navigate("/");
                } else {
                    setErrors({
                        name: "Something wrong",
                        email: "u mess up",
                        password: "no"
                    });
                }
            })
    }

    return (
        <div>
            <h2>Edit User</h2>
            <Form data={ user } changeHandler={ changeHandler } errors={ errors } setData={ setUser } submitData={ submitData } />
        </div>
    )
}

export default EditUser
