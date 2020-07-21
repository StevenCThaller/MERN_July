import React from 'react'
import Form from './Form'
import { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const CreateUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const submitData = () => {
        axios.post("http://localhost:8000/api/users", user)
            .then(response => {
                if(response.data.message == "success"){
                    setUser({
                        name: "",
                        email: "",
                        password: ""
                    })
                    navigate("/");
                }
                else {
                    console.log(response.data.results);
                    const {...currErrors} = errors
                    if(response.data.results.errors.name){
                        currErrors.name = response.data.results.errors.name.properties.message
                    } else {
                        currErrors.name = "";
                    }
                    if(response.data.results.errors.email){
                        currErrors.email = response.data.results.errors.email.properties.message
                    } else {
                        currErrors.email = "";
                    }
                    if(response.data.results.errors.password){
                        currErrors.password = response.data.results.errors.password.properties.message
                    } else {
                        currErrors.password = "";
                    }

                    setErrors(currErrors);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h2>Create New User</h2>
            <Form data={ user } changeHandler={ changeHandler } errors={ errors } setData={ setUser } submitData={ submitData }/>
        </div>
    )
}

export default CreateUser
