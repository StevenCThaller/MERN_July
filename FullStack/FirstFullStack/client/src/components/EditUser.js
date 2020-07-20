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
    })
    
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
            <Form data={ user } errors={ errors } setData={ setUser } submitData={ submitData } />
        </div>
    )
}

export default EditUser
