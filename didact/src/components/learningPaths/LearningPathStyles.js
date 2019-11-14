import styled from 'styled-components'

export const LearningPathWrapper = styled.div`
    /* margin-right: 30px; */
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        margin: auto;
        }

    .breadcrumb {
        display: flex;
        flex-direction: column;

        .breadcrumbTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                font-weight: bold;
            }

            a {
                text-decoration: none;
                color: black;
                font-weight: bold;
            }
        }

        span {
            border-top: black 1px solid;
            width: 100%;
        }
    }

    .learningPathCards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        text-align: left;


        @media (max-width: 600px) {
            margin: auto;
            width: 100%;
            }

        .upcomingCards {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .long:last-child {

                .learningPathCard {
                    width: 826px;
                    height: 100%;

                    @media (max-width: 600px) {
                        max-width: 826px;
                        width: 100%;
                        margin: auto;
                    }
                   
                }
            }
        }

        .completedCards {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .long:last-child {
                
                .learningPathCard {
                    width: 826px;
                    height: 100%;
                }
            }
        }

        h3 {
            width: 100%;
        }
    }

    .learningPathCourseWrappers {
        text-align: left;

        .completed {
            background: #D1E2EA;
            opacity: 0.5;
            width: 395px;
            color: black;
        }
        
        a {
            text-decoration: none;
            min-width: 130px;
            text-align: center;
        }

        .long:last-child {
            width: 826px
        }
    }

    .current {
        width: 100%;

        .currentTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .learningPathCard {
            background: #386581;
            width: 100%;
        }

        .editLearningButton {
            font-size: .8rem;
            margin-right: 20px;
            color: #2424247D;
            font-weight: bold;
            
            a {
                color: black;
                text-decoration: none;
            }
        }
    }

    .upcoming {
        width: 395px;
        margin-bottom: 52px;

            .learningPathCard {
            background: #ADC8D9;
            color: black;
            width: 395px;
            margin: 0px;
        }
    }

    .item {
        .learningPathCard {
            background: #D1E2EA;
            color: black;
        }
    }

    .learningPathCard {
            color: white;
            background: white;
            padding: 35px 43px 30px 30px;
            border-radius: 19px;
            width: 540px;
            height: 330px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                margin: 0;
                font-size: 2.4rem;
                max-height: 68px;
                overflow: hidden;
            }

            p {
                margin: 0;
                margin-top: 25px;
                max-height: 100px;
                overflow: hidden;
            }

            .goToCourse {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 25px;
                
                a {
                    background-color: #242424;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 16px;
                    font-weight: bolder;
                }

                h4 {
                    margin: 0;
                }
            }
        }
`