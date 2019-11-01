import styled from 'styled-components'

export const LearningPathsWrapper = styled.div`
    margin-right: 30px;

    .learningPathCard {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        border-radius: 19px;
        padding: 35px 40px;
        margin-bottom: 50px;

        .title {
            text-align: left;

            h1 {
                margin: 0;
                padding-bottom: 20px;
            }

            a {
                background-color: #242424;
                color: white;
                padding: 10px 15px;
                border-radius: 16px;
                font-weight: bolder;
                text-decoration: none;
            }
        }

        .icon {
            width: 75px;
            height: 75px;
            background: black;
            border-radius: 15px;
        }
    }

    .buttons {
        padding: 15px 0px;
        display: flex;
        justify-content: flex-start;

        a {
            color: black;
            background: white;
            text-decoration: none;
            padding: 20px 30px;
            border-radius: 19px;
            font-weight: bold;
            min-width: 230px;

            &:first-child {
                margin-right: 20px;
            }
        }
    }
`