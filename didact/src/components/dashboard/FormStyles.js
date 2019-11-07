import styled from 'styled-components'

export const DidactField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`

export const DidactForm = styled.input`
    width: 92%;
    height: 32px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    margin: 5px auto 10px auto;
    outline: none;
    ::placeholder {
        color: #90A1AC;
    }
`

export const DidactLabel = styled.label`
    margin-left: 20px;
    padding-bottom: 0;
    color: #696D6E;
`

export const DidactTextArea = styled.textarea`

`