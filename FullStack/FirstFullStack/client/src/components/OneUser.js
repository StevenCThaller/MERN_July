import React, { useState, useEffect } from 'react'
import axios from 'axios';

const OneUser = props => {
    const [user, setUser] = useState({
        _id: "",
        name: "",
        email: "",
        password: "",
        createdAt: "",
        updatedAt: ""
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/users/${props.id}`)
            .then(response => {
                if(response.data.message == "success")
                {
                    setUser(response.data.results);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <h2>This is the page for { user.name }</h2>
            <ul>
                <li>Name: { user.name }</li>
                <li>Email: { user.email }</li>
                <li>ID No.: { user._id }</li>
                <li>Member since: { user.createdAt }</li>
            </ul>
        </div>
    )
}

export default OneUser
