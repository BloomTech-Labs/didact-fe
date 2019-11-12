import styled from 'styled-components'

export const SideListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .profileSection {
        width: 213px;
        margin: 0 auto;
        /* padding-top: 17px; */
        /* padding-bottom: 24px; */
        padding: 17px 15px 24px 15px;
        border-top: #7070704A 1px solid;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p.logout {

            &:hover {
                cursor: pointer;
            }
        }
    }
`