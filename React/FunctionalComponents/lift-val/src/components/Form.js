import React from 'react'

const Form = props => {
    const { user, changeHandler, errors, submitted, setSubmitted } = props;

    const submitHandler = e => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <form onSubmit={ submitHandler }>
            <div className="form-group row">
                {
                    submitted && errors.firstName != "" ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.firstName }</span>
                    :
                    ''
                }
                <label htmlFor="firstName" className="col-sm-4">First Name: </label>
                <input 
                    type="text" 
                    name="firstName"
                    className="col-sm-8 form-control"
                    onChange={ changeHandler }
                    value={ user.firstName }
                />
            </div>
            <div className="form-group row">
                {
                    submitted && errors.lastName != "" ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.lastName }</span>
                    :
                    ''
                }
                <label htmlFor="lastName" className="col-sm-4">Last Name: </label>
                <input 
                    type="text" 
                    name="lastName"
                    className="col-sm-8 form-control"
                    onChange={ changeHandler }
                    value={ user.lastName }
                />
            </div>
            <div className="form-group row">
                {
                    submitted && errors.email != "" ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.email }</span>
                    :
                    ''
                }
                <label htmlFor="email" className="col-sm-4">Email: </label>
                <input 
                    type="text" 
                    name="email"
                    className="col-sm-8 form-control"
                    onChange={ changeHandler }
                    value={ user.email }
                />
            </div>
            <div className="form-group row">
                {
                    submitted && errors.password != "" ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.password }</span>
                    :
                    ''
                }
                <label htmlFor="password" className="col-sm-4">Password: </label>
                <input 
                    type="password" 
                    name="password"
                    className="col-sm-8 form-control"
                    onChange={ changeHandler }
                    value={ user.password }
                />
            </div>
            <div className="form-group row">
                <label htmlFor="confirmPw" className="col-sm-4">Confirm: </label>
                <input 
                    type="password" 
                    name="confirmPw"
                    className="col-sm-8 form-control"
                    onChange={ changeHandler }
                    value={ user.confirmPw }
                />
            </div>
            <div className="form-group row">
                <input type="submit" value="Submit" className="col-sm-4 offset-sm-4 btn btn-primary"/>
            </div>
        </form>
    )
}

export default Form
