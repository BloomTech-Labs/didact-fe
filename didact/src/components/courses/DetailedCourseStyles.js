import styled from 'styled-components'

export const DetailedCourseWrapper = styled.div`
    width: calc(100% - 20px);
    max-width: 600px;
    min-width: 375px;

    .courseWrapper {
        height: 40%;
        width: calc(100% - 40px);

        .courseFooter {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;

            .buttons {
                margin: 0;
                padding: 0;
            }

            .tags {
                margin: 0;
                padding: 0;
            }
        }
    }

    .expansionPanel {

        background: white;
        margin: 20px 0px;
        padding: 15px 30px;

        .expansionPanelSummary {
        background: white;
        margin: 0;
        padding: 0;
        }

        div{
            padding: 0;
            margin: 0;
            border-radius: 19px;
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
        font-size: 14px;

        .lessonExpansionSummary {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .lessonTitle {
            display: flex;
            flex-direction: column;

            .lessonTitleName {
                font-weight: bold;
                margin-bottom: 0px;
                margin-top: 8px;
                text-decoration: none;
                color: black;

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