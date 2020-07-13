// import React from 'react'

// const TomatoForm = (props) => {
//     const { size, shape, name, newSize, newShape, newName, newSubmit } = props;

//     const handleSubmit = e => {
//         e.preventDefault();
//         newSubmit();
//         clearForm();
//     }

//     const clearForm = () => {
//         newSize("");
//         newShape("");
//         newName("");
//     }

//     return (
//         <form onSubmit={ handleSubmit }>
//             <div className="form-group row">
//                 <label htmlFor="size" className="col-sm-4">Size:</label>
//                 <input 
//                     type="text" 
//                     name="size"
//                     className="col-sm-8 form-control" 
//                     onChange={ e => newSize(e.target.value)} 
//                     value={ size }
//                 />
//             </div>
//             <div className="form-group row">
//                 <label htmlFor="shape" className="col-sm-4">Shape: </label>
//                 <input 
//                     type="text" 
//                     name="shape" 
//                     className="col-sm-8 form-control" 
//                     onChange={ e => newShape(e.target.value)}
//                     value={ shape }
//                 />
//             </div>
//             <div className="form-group row">
//                 <label htmlFor="name" className="col-sm-4">Name: </label>
//                 <input 
//                     type="text" 
//                     name="name" 
//                     className="col-sm-8 form-control" 
//                     onChange={ e => newName(e.target.value) }
//                     value={ name }
//                 />
//             </div>
//             <div className="form-goup row">
//                 <input 
//                     type="submit" 
//                     value="Submit" 
//                     className="col-sm-4 offset-sm-4 btn btn-primary"
//                 />
//             </div>
//         </form>
//     )
// }

// export default TomatoForm


import React from 'react'

const TomatoForm = (props) => {
    const { tomato, setTomato, newSubmit } = props;

    const handleSubmit = e => {
        e.preventDefault();
        newSubmit();
    }

    const changeTomato = e => {
        setTomato({
            ...tomato,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group row">
                <label htmlFor="size" className="col-sm-4">Size: </label>
                <input 
                    type="text" 
                    name="size" 
                    className="col-sm-8 form-control"
                    onChange={ changeTomato }
                />
            </div>
            <div className="form-group row">
                <label htmlFor="shape" className="col-sm-4">Shape: </label>
                <input 
                    type="text" 
                    name="shape" 
                    className="col-sm-8 form-control"
                    onChange={ changeTomato }
                />
            </div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input 
                    type="text" 
                    name="name" 
                    className="col-sm-8 form-control"
                    onChange={ changeTomato }
                />
            </div>
            <div className="form-group row">
                <input type="submit" value="Submit Mato" className="col-sm-4 offset-sm-4 btn btn-primary"/>
            </div>
        </form>
    )
}

export default TomatoForm






/*
Brief diagram explaing spread operators

const object = {
    field_1: "banana",
    field_2: "orange peel",
    field_3: "elephant"
}

const {field_1, ...others } = object;

What this means, is:
    field_1 = "banana"
And
    others = {
        field_2: "orange peel",
        field_3: "elephant"
    }

That means, if we have

const {...something} = object;

Then 
    something = {
        field_1: "banana",
        field_2: "orange peel",
        field_3: "elephant"
    }

So, when we do something like
    setState({
        ...something,
        field_2: "green day"
    })

Then we're changing that object from:
    {
        field_1: "banana",
        field_2: "orange peel",
        field_3: "elephant"
    }

to:
    {
        field_1: "banana",
        field_2: "green day",
        field_3" elephant"
    }
*/