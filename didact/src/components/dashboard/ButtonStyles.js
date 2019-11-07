import styled from 'styled-components'


// Button with Plus sign

export const AddButton = styled.div`
    height: 75px;
    width: 160px;
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
    /* padding-top: 3px; */
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
    margin: -53px 10px 10px 10px;
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
`

// Edit lesson button

export const EditLessonButton = styled.button`
       box-shadow: none;
        border-radius: 12px;
        background: #242424;
        height: 30px;
        width: 112px;
        border: none;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
        color: rgba(0, 0, 0, 0.87);
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
        background-color: #e0e0e0;
        
    }
`

// Div for aligning cancel and add/edit buttons

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`

// finish edit and return to course button

export const FinishEdit = styled.div`
    background:  #EBE8E1;
    max-width: 600px;
    width: 100%;
    border-radius: 15px;
    height: 30px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: rgba(0, 0, 0, 0.87);
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
        background-color: #e0e0e0;
        
    }
`

// button for deleting a form piece from the db

export const DeleteForm = styled.button`
    opacity: 0.8;
    background: white;
    border: none;
    cursor: pointer;
    margin-left: 92%;
    height: 40px;
    width: 40px;
    color: grey;
    &:hover {
        opacity: 1;
        color: black;
    }
`

// Tag Styling

export const TagStyles = styled.span `
        font-size: 14;
        font-weight: bold;
        margin: 3px;
        margin-left: 10px;
        padding: 5px 10px;
        border-radius: 10px;
        background: #5B5B5B;
        color: white;
`