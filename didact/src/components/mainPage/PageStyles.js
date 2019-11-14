import styled from 'styled-components'

export const PageFlex = styled.div`
    width: 100%;
    display: flex;
    /* width: auto; */

    .drawer {
        padding-right: 20px;
    }

    .headerMain {
        /* padding-left: 50px; */
        min-width: 826px;
        /* width : 100%; */
        margin: 0 0 0 15px;

        .header {
            width: 825px;
            width: 100%;
            display: flex;
            background: #242424BF;
            border-radius: 19px;
            margin-top: 10px;
            justify-content: space-between;
            align-items: center;
            color: #EBE8E1;
            padding: 10px 25px;

            h2 {
                margin: 0px 0px;
                font-family: ITC Grouch;
                font-size: 32px;
            }

            .navSection {
                width: 100%;
                max-width: 250px;
                display: flex;
                align-items: center;
                justify-self: "flex-end";
                justify-content: flex-end;

                p:first-child {
                    margin-right: 33px;
                }
            }
        }
    }
`;
