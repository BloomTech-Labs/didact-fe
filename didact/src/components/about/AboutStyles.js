import styled from 'styled-components'

export const ContentDiv = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    text-align: left;
    margin-top: 20px;

`


export const ImageDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 10px;
`

 export const LambdaImage = styled.img `
    width: 160px;
    height: 160px;
 
 `

 export const CardContainer = styled.div `
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
 `

 export const Card = styled.div `
    min-width: 380px;
    width: 100%;
    max-width: 420px;
    height: 166px;
    background-color: #565554;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    padding: 20px 20px 10px 20px;
    margin: 12px 0;
    font-family: ITC Grouch;
    align-items: center;
 
 `

 export const PersonImage = styled.img `
    width: 133px;
    min-width: 133px;
    height: 116px;
    border-radius: 15px;
    object-fit: cover;

 `

 export const PersonInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    text-align: left;
 `

