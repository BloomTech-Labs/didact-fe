import styled from 'styled-components'

export const LearningPathsWrapper = styled.div`
    margin-right: 30px;
    display: flex;
    flex-direction: column;
`

export const YourLearningPathsWrapper = styled.div`
    margin-right: 30px;
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
        }
    }

    h1 {
        text-align: left;
    }

`

export const LearningPathCard = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        border-radius: 19px;
        padding: 35px 43px;
        margin-bottom: 28px;
        width: 540px;
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
                width: 116px;
                height: 35px;

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

`