import React from 'react';
import Source from './Source.jsx'

const Sources = props => {
    const state = useSelector(state => state);
    const sources = state.resourcesReducer.sources;

    return (
        <div className="sources-list">
        {sources.map(source => (
            <Source source={source} key={source.id}/>
        ))}
        </div>
    )
}

export default Sources;