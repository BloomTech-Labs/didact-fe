import styled from 'styled-components'

export const LearningPathWrapper = styled.div`
    margin-right: 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        margin: auto;
        }

    .editLearning {
        width: 100%;
        border-radius: 19px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 27px;
        font-weight: bold;
        color: #141821;
        max-width: 540px;

        p {
            margin: 0;
        }

        .editLearningButton {
            font-size: .8rem;
            
            a {
                color: black;
                text-decoration: none;
            }
        }
    }

    .learningPathCourseWrappers {
        text-align: left;
        max-width: 600px;
        
        h3 {
            padding: 5px 15px;
        }

        .completed {
            background: white;
            opacity: 0.5;
        }
        
        a {
            text-decoration: none;
            min-width: 130px;
            text-align: center;
        }
    }

    .current {
        
        .learningPathCard {
            background: #386581;
        }
    }

    .next {

        .learningPathCard {
            background: #ADC8D9;
            color: black;
        }
    }

    .upcoming {

        .learningPathCard {
            background: #ADC8D9;
            color: black;
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
            margin: 25px 0px;
            max-width: 540px;
            width: 100%;

            h2 {
                margin: 0;
            }

            p {
                margin: 0;
                margin-top: 25px;
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