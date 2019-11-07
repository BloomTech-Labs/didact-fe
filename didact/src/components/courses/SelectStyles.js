import styled from 'styled-components'

export const TagInput = styled.input`
    height: 50px;
    width: 65%;
    margin: 5px 5px 10px 5px;
    border-radius: 12px;
    border: solid grey 1px;
    background: #E8ECED;
    overflow-y: scroll !important;
    padding-left: 10px;
`

export const TagSelect = styled.datalist`
    /* overflow-y: scroll !important; */
    /* height: 30px;
    width: 150px;
    border-radius: 10px;
    &:focus {
        border-radius: 10px;
    } */

    height: 50px !important;
    max-height :80px !important;
    overflow-y: auto !important;
    /* display:block !important; */
    /* anch */
`