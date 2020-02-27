import React from 'react';

const Source = (props) => {
    const source = props.source;

    return (
        <Link to={source.link} className="source">
            <h1>{source.name}</h1>
            <p>{source.description}</p>
        </Link>
    )
}