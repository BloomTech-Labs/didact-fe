import styled from 'styled-components'

export const DetailedCourseWrapper = styled.div`
    width:100%;
    box-shadow: 'none';

    .courseWrapper {
        width: 100%; 
        background-color: #386581;
        color: white;
        max-width: 540px;

        .courseFooter {
            margin: 0;
            padding: 0;
            display: flex;
            flex-flow:row wrap;
            justify-content: space-between;
            color: white;
            background-color: #386581;

            .buttons {
                margin: 0;
                padding: 0;
            }

            .tags {
                display: flex;
                flex-flow:row wrap;
                width: 100%;
                color: white;
                background-color: #386581;
             
            }
        }
    }

    .notCompleteButton {
        font-size: 2.2rem;
        color: white;
        opacity: .6;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .completeButton {
        font-size: 2.2rem;
        color: black;
        cursor: pointer;
    }

    .expansionPanel {

        margin: 20px 0px;
        padding: 15px 30px;
        box-shadow: 'none';
        color: white;
        background-color: #386581;
        max-width: 540px;
        width: 100%;

        .expansionPanelSummary {
        margin: 0;
        padding: 0;
        color: white;
        background-color: #386581;
        
        }

        div{
            padding: 0;
            margin: 0;
            border-radius: 19px;
            color: white;
            background-color: #386581;
        }

        &:before {
            height: 0px;
        }

        &:last-child {
            border-radius: 19px;
        }

        .expandIcon {
            :hover {
                background: lightgray;
                border-radius: 50%;
            }
        }
    }

    .lessonExpansionPanel {
        margin: 20px 0px;
        padding: 15px 30px;
        box-shadow: none;
        font-size: 1.2rem;
        max-width: 540px;
        width: 100%; 

        .lessonExpansionSummary {
            display: flex;
            justify-content: space-between;
            width: 100%;

            h4 {
                font-size: 14px;
            }
        }

        .lessonTitle {
            display: flex;
            flex-direction: column;

            .lessonTitleName {
                font-weight: bold;
                margin-bottom: 0px;
                margin-top: 8px;
                text-decoration: none;
                color: white;

                &:hover {
                    text-decoration: underline;
                }
            }

            .lessonTitleType {
                color: lightgray;
                font-size: 12px;
                margin-top: 0;
                text-transform: uppercase;
            }
        }

        &:before {
            height: 0px;
        }
    }

    div {
        background: white;
        border-radius: 19px;
        margin: 20px 0px;
        padding: 25px 30px;
        text-align: left;

        .expansionWrapper {
            margin: 0;
            padding: 0;
        }
    }

    span.tag{
        text-transform: uppercase;
        margin: 5px 10px 5px 0px;
    }
`

