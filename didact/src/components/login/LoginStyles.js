import styled from 'styled-components'

export const LoginFormWrapper = styled.div`

    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
    padding-top: 20px; 

    .header {
        text-align: left;
    }

    form {
        margin-bottom: 30px;
        box-shadow: 0px 0px 5px 0px rgba(237,237,237,1);

        .inputWrapper {
            margin: 10px;
            /* border: 1px solid black; */

            .input {

                display: flex;
                flex-direction: column;
                margin: 20px 0px;

                p {
                    font-size: 12px;
                    align-self: flex-start;
                    margin: 5px 15px;
                    color: rgb(116,138,161)
                }

                input {
                width: 100%;
                box-sizing: border-box;
                background: rgb(244,248,250);
                border: solid 1px rgb(235,237,244);
                padding: 15px;
                border-radius: 4px;

                    &:focus {
                        outline: none;
                    }
                }

                .errorMessage {
                    color: red;
                    margin-bottom: 0;
                }
            }

            .input.error {
                input {
                    border: red solid 1px;
                }
            }

            button {
                width: 100%;
                background: rgb(91,91,91);
                color: white;
                border-radius: 4px;
                border: none;
                padding: 15px;
                font-size: 16px;
                margin: 20px 0px;
            }
        }
    }

    .socialButtons {
        display: flex;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: white;
            background: rgb(91,91,91);
            width: 35%;
            border-radius: 4px;
            padding: 15px;
        }
    }
`

export const LoginWrapper = styled.div`
    width: 45%;
    background: white;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 50px;
`

export const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`