import styled from 'styled-components'
import Card from '@material-ui/core/Card';

export const DroppableDiv = styled.div`
     max-width: 540px;
`

export const DraggableDiv = styled(Card)`
    max-width: 540px;
    opacity: ${props => (props.isdragging === 'true' ? '.7 !important'  : "1")};
    border-radius: 15px;
`

export const PathInstructions = styled.div`
    max-width: 540px;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 15px 0;
    font-size: 2.0rem;
`