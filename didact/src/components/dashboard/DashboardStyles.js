import styled from 'styled-components'

export const CoursesCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border-radius: 15px;
    background-color: white;
    width: 100%;
    max-width: 600px;
  
    
    div {
        border-top: 1px solid #EEEFF3
    }

    div:first-child {
        border: none;
    }

    div:nth-child(2) {
        border: none;
    }
`;

export const CourseMenuDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    color: #9397A3;
`;

export const CourseDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
        margin: 20px 5px;

        &:first-child {
            margin-left: 20px;
        }

        &:last-child {
            margin-right: 30px;
        }

        
    }
    .picture {
            width: 100px;
            height: 100px;
            background: #EEEFF3;
            border-radius: 19px;
        }

    .info {
        margin-top: -7px;
        width: 160px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a {
            text-decoration: none;
            color: black;

            &:hover {
                text-decoration: underline;
            }
        }

        .title {
            font-weight: bold;
            max-height: 40px;
            overflow: hidden;
        }

        .source {
            color: #9397A3;
        }
        
    }
`;