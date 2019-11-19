import styled from 'styled-components'

export const ContentDiv = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    text-align: left;
    margin-top: 20px;
  

`

export const ContentDivMobile = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    /* justify-content: space-e; */
    text-align: left;
    margin-top: 20px;
    padding-right: 10px;

`


export const ImageDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 10px;
`

 export const LambdaImage = styled.img `
    width: 75px;
    height: 75px;
 
 `

 export const BottomDiv = styled.div `
   display: flex;
   justify-content: flex-end;
   margin: 100px 10px 50px 10px;

 `

 export const CardContainer = styled.div `
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
 `


export const CardContainerOpen = styled.div `
   width: 100%;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
`

 export const Card = styled.div `
    width: 390px;
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

export const CardOpen = styled.div `
   width: 460px;
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

