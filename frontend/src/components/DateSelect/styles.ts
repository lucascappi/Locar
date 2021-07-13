import styled from "styled-components";

export const Container = styled.div`
    background: var(--gray-700);

    padding: 1rem;

    border-radius: .25rem;

    display: flex;
    align-items: center;

    strong{
        display: block;
        font-weight: 400;
        margin-right: 1rem;
    }

    > div{

        width: 100%;

        .MuiInput-underline{
            color: var(--gray-200);

            &:hover:not(.Mui-disabled):before{
                border-bottom: 1px solid var(--red-500);
            }

            &::before{
                border-bottom-color: rgba(255, 255, 255, .12);
            }

            &::after{
                border-bottom-color: var(--red-500);
            }

            button{
                color: var(--gray-300);
            }
        }
        
    }
`;