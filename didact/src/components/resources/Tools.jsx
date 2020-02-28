import React from 'react';
import Tool from './Tool.jsx'
import { useSelector } from 'react-redux'

const Tools = props => {
    const state = useSelector(state => state);
    const tools = state.resourcesReducer.tools;

    return (
        <div className="tools-list">
        {tools.map(tool => (
            <Tool tool={tool} key={tool.id}/>
        ))}
        </div>
    )
}

export default Tools;