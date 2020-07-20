import React, { useState }from 'react'

const Form = props => {
    const { data, setData, errors, submitData } = props;

    const changeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        submitData();
    }

    return (
        <form onSubmit={ submitHandler }>
            {
                errors.name ?
                <p>{ errors.name }</p>
                :
                ""
            }
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={ e => changeHandler(e) } value={ data.name }/>
            <br/>
            {
                errors.email ?
                <p>{ errors.email }</p>
                :
                ""
            }
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" onChange={ e => changeHandler(e) } value={ data.email }/>
            <br/>
            {
                errors.password ?
                <p>{ errors.password }</p>
                :
                ""
            }
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={ changeHandler } value={ data.password }/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form
