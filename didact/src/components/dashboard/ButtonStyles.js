import styled from 'styled-components'


// Button with Plus sign

export const AddButton = styled.div`
    height: 75px;
    width: 175px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    background: #EEEFF3;
    border-radius: 15px;
    margin-bottom: 10px;
    &:hover {
        cursor: 'pointer';
    }
`

export const PlusDiv = styled.div`
    background: #575758;
    color: #EEEFF3;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Plus = styled.span`
    font-size: 3rem;
    padding-top: 3px;
`
export const ButtonText = styled.p`
    color: black;
    padding-right: 15px;
    font-weight: bold;
`

export const AddButtonInSection = styled.div`
    height: 55px;
    width: 155px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    background: #EEEFF3;
    border-radius: 25px;
    margin: -63px 10px 10px 10px;
    padding: 0 10px;
    &:hover {
        cursor: 'pointer';
    }
`

export const PlusDivInSection = styled.div`
    background: #575758;
    color: #EEEFF3;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PlusInSection = styled.span`
    font-size: 2rem;
    padding-top: 2.5px;
`
export const ButtonTextInSection = styled.p`
    color: black;
    padding-right: 15px;
    font-size: 12px; 
    font-weight: bold;
`

// X Button for removing tag

export const TagDelete = styled.div`
    opacity: 0;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 30px;
    color: white;
    width: 25px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 0 13px 13px 0;
    &:hover {
        opacity: .8;
        background: maroon;
        
    }
`
export const P = styled.p`
    padding: 1px;
    margin-top: -1px;
    font-size: 1.3rem;
    line-height: 28px;
    
    /* &:hover {
        background: maroon;
    } */
`