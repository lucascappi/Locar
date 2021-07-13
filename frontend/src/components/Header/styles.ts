import styled from "styled-components";

export const Container = styled.header`
    height: 5rem;

    border-bottom: 1px solid var(--gray-700);
`

export const Content = styled.div`
    width: min(100%, 1120px);
    height: 5rem;

    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        transition: filter .2s;

        &:hover{
            filter: brightness(.75);
        }
    }
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.125rem;

    div strong{
        margin-left: .5rem;
        color: var(--red-500);
    }

    span{
        display: flex;
        align-items: center;
        gap: .5rem;

        background: var(--gray-700);

        padding: .5rem 1rem;
        border-radius: .25rem;

        transition: filter .2s;
        cursor: pointer;

        strong{
            font-weight: 400;

            @media(max-width: 720px){
                display: none;
            }
        }

        &:hover{
            filter: brightness(1.1);
        }
    }
`