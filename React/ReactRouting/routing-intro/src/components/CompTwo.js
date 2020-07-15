import React, { useState } from 'react'
import { navigate } from '@reach/router';

const CompTwo = () => {
    const [person, setPerson] = useState({
        name: "",
        age: 0
    });


    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/person/${person.name}/${person.age}`);
    }

    const changeHandler = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }





    return (
        <div>
            <h1>This is component 2</h1>
            
            <form onSubmit={ submitHandler }>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={ changeHandler } 
                    value={ person.name }
                />
                <br/>
                <label htmlFor="age">Age: </label>
                <input 
                    type="number" 
                    name="age" 
                    onChange={ changeHandler }
                    value={ person.age }    
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CompTwo
