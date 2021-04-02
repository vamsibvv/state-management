import React from 'react'


function Movie(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
        </div>
    )
}

export default Movie;