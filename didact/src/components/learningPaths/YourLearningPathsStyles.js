import styled from 'styled-components'

export const LearningPathsWrapper = styled.div`
    margin-right: 30px;

    @media (max-width: 600px) {
        margin: auto;
        }

    .learningPathCard {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        border-radius: 19px;
        padding: 35px 40px;
        margin-bottom: 50px;
        max-width: 600px;


        .title {
            text-align: left;

            h1 {
                margin: 0;
                padding-bottom: 20px;
            }

            /* a {
                background-color: #242424;
                color: white;
                padding: 10px 15px;
                border-radius: 16px;
                font-weight: bolder;
                text-decoration: none;
            } */

            button {
                background-color: #242424;
                color: white;
                padding: 10px 15px;
                border-radius: 16px;
                font-weight: bolder;
                text-decoration: none;
                border: none;
                margin-right: 10px;

                a {
                    color: white;
                    /* font-weight: bolder; */
                    text-decoration: none;
                }

                &:focus {
                    outline: none;
                }
            }
        }
/* 
        .icon {
            width: 75px;
            height: 75px;
            background: black;
            border-radius: 15px;
        } */
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