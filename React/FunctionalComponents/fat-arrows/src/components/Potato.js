// In order to use state in functional components, we need to 
// import that capability from react
import React, { useState } from 'react';

// Arrow function syntax!
const Potato = () => {
    // Now, the key difference here is rather than state being one
    // cohesive object that we dip into for each bit, we need to split it
    // up into the separate parts.
    
    // You could technically use your knowledge of destructuring and spread operators
    // to perform the same functionality, but this way is easier to manage.
    const [allTaters, setAllTaters] = useState([]);
    const [type, setType] = useState("");
    const [method, setMethod] = useState("");
    const [color, setColor] = useState("");
    
    // For determining if the form has even been submitted yet
    const [submitted, setSubmitted] = useState(false);

    // These are going to be the error messages for each field.
    const [typeError, setTypeError] = useState("Potato type cannot be left blank.");
    const [methodError, setMethodError] = useState("Cooking method cannot be left blank.");
    const [colorError, setColorError] = useState("Potato color cannot be left blank.");

    // This is the method that we are going to use to handle form submission
    const addTater = e => {
        // Because we are using react to create single page applications,
        // it is INCREDIBLY IMPORTANT that we do not navigate away from this 
        // page.

        // Therefore, we must prevent the default action of a form submission
        e.preventDefault();
        setSubmitted(true);

        if(typeError !== "" || methodError !== "" || colorError !== ""){
            return;
        }


        // Now, we destructure allTaters into a mutable array
        const [...currentTaters] = allTaters;
        
        // Push a new tater (created as the parts from the form) into that mutable array
        currentTaters.push({ type, method, color });
        
        
        // And now, set state for allTaters as the newly created currentTaters
        setAllTaters(currentTaters);
        
        // Finally, as a nice little flourish, we'll invoke our resetForm function to clear out the inputs
        // on the form
        resetForm();
    }

    // Because we implemented the value portion of the input tags, 
    // we've brute forced our way into model binding in a way.
    const resetForm = () => {
        // So setting the parts of state that relate to the form inputs
        // to empty strings allows us to clear the form!
        setType("");
        setMethod("");
        setColor("");
    }


    const typeHandler = e => {
        const newType = e.target.value;
        setType(newType);
        
        if(newType.length === 0) {
            setTypeError("Potato type cannot be left blank.");
        }
        else if(newType.length < 3) {
            setTypeError("Potato type must be at least 3 characters.");
        }
        else if(newType == "Cody") {
            setTypeError("That's just mean, Cody is not a potato");
        }
        else {
            setTypeError("");
        }
    }

    const methodHandler = e => {
        const newMethod = e.target.value;
        setMethod(newMethod);

        if(newMethod.length == 0) {
            setMethodError("Cooking method cannot be left blank.");
        }
        else if(newMethod.length < 3) {
            setMethodError("Cooking method must be at least 3 characters.");
        }
        else if(newMethod == "freeze") {
            setMethodError("Eww gross, why would you want to eat frozen potatoes?");
        }
        else {
            setMethodError("");
        }
    }

    const colorHandler = e => {
        const newColor = e.target.value;
        setColor(newColor);

        if(newColor.length == 0) {
            setColorError("Potato color cannot be left blank.");
        }
        else if(newColor.length < 3) {
            setColorError("Potato color must be at least 3 characters.");
        }
        else if(newColor == "fuzzlesnap") {
            setColorError("Dude, that's not even a color. Come on.");
        }
        else {
            setColorError("");
        }
    }

    return (
        <div>
            <h1>Gimme all them taters</h1>
            <ul>
                {/* React does not like for/foreach loops, so we use map. */}
                {
                    // map is a method invoked from the collection you want to iterate through
                    // and has 1 parameter: a callback function. HOWEVER! That callback function
                    // has 2 parameters: the value of each item in the collection, and the index.
                    allTaters.map((tater, i) => 
                        // To prevent warnings in the browser, make sure to add your key
                        <li key={i}>
                            <ul>
                                <li>Potato No: { i+1 }</li>
                                <li>Type: {tater.type}</li>
                                <li>Method: {tater.method}</li>
                                <li>Color: {tater.color}</li>
                            </ul>
                        </li>
                    )                    
                }
            </ul>
            {/* We've added an event listener to our form to listen for form submissions. 
            When the form is submitted, it will call the addTater function that we wrote! */}
            <form onSubmit={ addTater }>
                {
                    submitted && typeError ? 
                    <p>{ typeError }</p>
                    :
                    ''
                }
                <label htmlFor="">Type: </label>
                {/* Pretty typical onChange event handling: update some part of state with the 
                value of the input whenever the input itself is changed */}
                <input type="text" onChange={ e => typeHandler(e) } value={ type }/>
                <br/>
                {
                    submitted && methodError ?
                    <p>{ methodError }</p>
                    :
                    ''
                }
                <label htmlFor="">Cooking Method: </label>
                <input type="text" onChange={ e => methodHandler(e) } value={ method }/>
                <br/>
                {
                    submitted && colorError ?
                    <p>{ colorError }</p>
                    :
                    ''
                }
                <label htmlFor="">Color: </label>
                <input type="text" onChange={ e => colorHandler(e) } value={ color }/>
                <br/>
                <button>Add that tater!</button>
            </form>
        </div>
    )
}

export default Potato;
