import React from 'react'

const TomatoList = (props) => {
    const { allMatoes } = props;

    return (
        <ul>
        {
            allMatoes.map((mato, i) => 
                <li key={ i }>{mato.name} - A { mato.size }, {mato.shape } tomato.</li>
            )
        }
        </ul>
    )
}

export default TomatoList
