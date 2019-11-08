import styled from 'styled-components'
import Card from '@material-ui/core/Card';

export const DroppableDiv = styled.div`
     max-width: 540px;
`

export const DraggableDiv = styled(Card)`
    max-width: 540px;
    /* box-shadow: ${props => (props.isDragging ? '0 10px 20px rgba(0,0,0,0.4), 0 6px 6px rgba(0,0,0,0.23) !important'  : "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12) !important")}; */
    background-color: ${props => (props.isDragging ? 'rgba(245, 245, 245, 1) !important'  : "white")};
    border-radius: 15px;
`

export const PathInstructions = styled.div`
    max-width: 540px;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 15px 0;
    font-size: 2.0rem;
`

// .card-3 {
//     box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
//   }