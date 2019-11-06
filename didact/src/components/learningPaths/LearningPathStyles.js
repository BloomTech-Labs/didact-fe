import styled from 'styled-components'

export const LearningPathWrapper = styled.div`
    /* border: 1px solid black; */
    margin-right: 30px;

    .editLearning {
        width: 100%;
        border-radius: 19px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
        font-weight: bold;
        color: #141821;
        max-width: 600px;


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

    .learningPathCard {
            background: white;
            padding: 10px 30px;
            border-radius: 19px;
            margin: 25px 0px;

            .goToCourse {
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                a {
                    background-color: #242424;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 16px;
                    font-weight: bolder;
                }
            }
        }
`