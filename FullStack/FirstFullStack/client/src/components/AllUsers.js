import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

    const getAll = () => {
        axios.get("http://localhost:8000/api/users")
            .then(response => {
                console.log(response);
                setAllUsers(response.data.results);
            });
    }

    useEffect(() => {
        getAll();
    }, []);

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/users/${id}`)
            .then(response => {
                getAll();
            })
    }


    
    return (
        <div>
            <h1>This is all the users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user, i) => 
                            <tr key={ i }>
                                <td><Link to={`/users/${user._id}`}>{ user.name }</Link></td>
                                <td>{ user.email }</td>
                                <td>{ user.password }</td>
                                <td>
                                    <Link to={ `/users/${user._id}/edit` }><button>Edit</button></Link>
                                    <button onClick={ () => deleteHandler(user._id) }>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers
