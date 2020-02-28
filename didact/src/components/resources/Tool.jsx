import React from 'react';
import { Link } from 'react-router-dom'

const Tool = (props) => {
    const tool = props.tool;

    return (
        <Link to={tool.link} className="tool">
            <h1>{tool.name}</h1>
            <p>{tool.description}</p>
        </Link>
    )
}

export default Tool;