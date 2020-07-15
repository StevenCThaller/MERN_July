import React from 'react'

const Variable = (props) => {
    return (
        <div>
            <h1>Hello, { props.name }</h1>
            <p>According to a stranger on the internet,
                you are { props.age } years old!
            </p>
        </div>
    )
}

export default Variable
