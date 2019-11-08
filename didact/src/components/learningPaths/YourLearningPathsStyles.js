import styled from 'styled-components'

export const LearningPathsWrapper = styled.div`
    margin-right: 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 600px){
        margin: auto;
    }

`

export const YourLearningPathsWrapper = styled.div`
    /* margin-right: 30px; */
    display: flex;

    .yourLearningPaths {
        display: flex;
        flex-direction: column;
    }

    .buttons {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        a {
            background-color: #242424;
            color: #F4F8FA;
            text-decoration: none;
            padding: 20px 30px;
            margin-bottom: 22px;
            border-radius: 19px;
            font-weight: bold;
            width: 255px;
            height: 61px;

            &:first-child {
                margin-right: 20px;
            }

            &:hover {
                color: rgba(0, 0, 0, 1);
                background-color: rgba(255, 255, 255, 1);
                border: solid black 1px;
                outline: none;
            }   
        }
    }

    h1 {
        text-align: left;
    }

`

export const LearningPathCard = styled.div`

    /* @media (max-width: 600px) {
        margin: auto;
        } */

        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        border-radius: 19px;
        padding: 35px 43px;
        margin-bottom: 28px;
        max-width: 540px;
        width: 100%;
        background-color: #386581;


        .title {
            text-align: left;

            h1 {
                margin: 0;
                padding-bottom: 20px;
                color: white;
            }

            button {
                background-color: #242424;
                color: white;
                padding: 8px 20px;
                border-radius: 16px;
                font-weight: bolder;
                text-decoration: none;
                border: none;
                margin-right: 10px;
                width: 125px;
                height: 35px;
                border: transparent solid 1px;

                a {
                    color: white;
                    /* font-weight: bolder; */
                    text-decoration: none;

                    
                }

                &:focus {
                    outline: none;
                }

                &:hover {
                color: rgba(0, 0, 0, 1);
                background-color: rgba(255, 255, 255, 1);
                border: solid black 1px;
                outline: none;
                cursor: pointer;

                a {
                    color: black;
                }
                }   
            }
        }

    .buttons {
        padding: 15px 0px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;

        @media (max-width: 880px) {
            justify-content: center;
            margin: auto;
        }

        a {
            color: black;
            background: white;
            text-decoration: none;
            padding: 20px 30px;
            border-radius: 19px;
            font-weight: bold;
            width: 250px;
            margin: 10px;


            &:first-child {
                margin-right: 20px;

                @media (max-width: 880px) {
                margin-right: 10px;
                }
            }
        }
    }

    h1 {
        text-align: left;
    }
`

export const ButtonStyles = styled.div `
    .buttons {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        a {
            background-color: #242424;
            color: #F4F8FA;
            text-decoration: none;
            padding: 20px 30px;
            margin-bottom: 22px;
            border-radius: 19px;
            font-weight: bold;
            width: 255px;
            height: 61px;

            &:first-child {
                margin-right: 20px;
            }

            &:hover {
                color: rgba(0, 0, 0, 1);
                background-color: rgba(255, 255, 255, 1);
                border: solid black 1px;
                outline: none;
            }   
        }
    }

`