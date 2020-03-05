import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToolById } from '../../store/actions';

const ToolDetailed = ({props, id}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const tool = state.toolsReducer.tool

    useEffect(() => {
        dispatch(getToolById(id))
    }, [dispatch, id])

    return (
        <div className="tool-detailed">
           <h1>{tool.name}</h1>
           <p>{tool.description}</p>
        </div>

    )
}

export default ToolDetailed;