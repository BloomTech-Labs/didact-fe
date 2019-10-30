import styled from 'styled-components'

export const PageFlex = styled.div`
    width: 100%;
    display: flex;
    /* width: auto; */

    .drawer {
        padding-right: 30px;
    }

    .headerMain {
        /* padding-left: 50px; */
        width : 100%;
        margin: 0 0 0 15px;

        .header {
            width: calc(100% - 30px);
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
                width: 300px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`;