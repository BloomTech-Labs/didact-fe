import styled from 'styled-components'

export const PageFlex = styled.div`
    width: 100%;
    display: flex;
    width: auto;

    .drawer {
        padding-right: 40px;
    }

    .headerMain {
        /* padding-left: 50px; */
        width : 100%;

        .header {
            width: 100%;
            display: flex;
            background: #5b5b5b;
            border-radius: 19px;
            margin-top: 10px;
            justify-content: space-between;
            align-items: center;
            color: white;
            padding: 5px 15px;

            h2 {
                margin: 0px 0px;
            }

            .navSection {
                width: 339px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`;