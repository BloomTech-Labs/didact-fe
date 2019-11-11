import styled from 'styled-components'

export const FormTitle = styled.h6`
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 15px;
`
export const DidactField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`
export const DidactInput = styled.input`
    width: 92%;
    height: 32px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 10px auto;
    outline: none;
    ::placeholder {
        color: #90A1AC;
        
    }
`
export const DidactLabel = styled.label`
    margin: 15px 0 0 20px;
    padding-bottom: 0;
    color: #696D6E;
`
export const DidactTextArea = styled.textarea`
    width: 92%;
    /* height: 32px; */
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 10px auto;
    outline: none;
    resize: none;
    ::placeholder {
        color: #90A1AC;
    }
`
export const DidactTagForm = styled.input`
    width: 92%;
    height: 35px;
    background: #F4F8FA;
    border: #D1E2EA solid 1px;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    margin: 5px auto 30px 10px;
    outline: none;
    ::placeholder {
        color: #90A1AC;
        
    }
`