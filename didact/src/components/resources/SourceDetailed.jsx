import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSourceById } from "../../store/actions";
import Card from "@material-ui/core/Card";
const SourceDetailed = ({ props, id }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const source = state.sourcesReducer.source;

  useEffect(() => {
    dispatch(getSourceById(id));
  }, [dispatch, id]);

  return (
    <Card>
      <div className="source-detailed">
        <h1>{source.name}</h1>
        <p>{source.description}</p>
      </div>
    </Card>
  );
};

export default SourceDetailed;
