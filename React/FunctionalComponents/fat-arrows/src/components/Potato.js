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

    // This is the method that we are going to use to handle form submission
    const addTater = e => {
        // Because we are using react to create single page applications,
        // it is INCREDIBLY IMPORTANT that we do not navigate away from this 
        // page.

        // Therefore, we must prevent the default action of a form submission
        e.preventDefault();

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
                <label htmlFor="">Type: </label>
                {/* Pretty typical onChange event handling: update some part of state with the 
                value of the input whenever the input itself is changed */}
                <input type="text" onChange={ e => setType(e.target.value)} value={ type }/>
                <br/>
                <label htmlFor="">Cooking Method: </label>
                <input type="text" onChange={ e => setMethod(e.target.value)} value={ method }/>
                <br/>
                <label htmlFor="">Color: </label>
                <input type="text" onChange={ e => setColor(e.target.value)} value={ color }/>
                <br/>
                <button>Add that tater!</button>
            </form>
        </div>
    )
}

export default Potato;
