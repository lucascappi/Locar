import styled from "styled-components";

interface ContainerProps{
    selectOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: min(100%, 248px);

    @media(max-width: 720px){
        width: 100%;
    }

    div{
        height: 3rem;
        padding: 0 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: var(--gray-700);
        border-radius: .25rem;

        border-bottom-left-radius: ${(props) => props.selectOpen && 0};
        border-bottom-right-radius: ${(props) => props.selectOpen && 0};

        cursor: pointer;
        transition: background-color .1s;

        &:hover{
            background: var(--gray-600);
        }

        strong{
            color: var(--gray-100);
            margin-left: .25rem;
        }

        .icon{
            transform: rotate(${(props) => props.selectOpen && '180deg'})
        }
    }
    
    ul{
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        z-index: 1;

        padding: .5rem 0;

        background: var(--gray-700);

        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
        box-shadow: 0 12px 16px rgba(0, 0, 0, .2);

        li{
            padding: .5rem 1rem;

            transition: background-color .1s;
            cursor: pointer;

            &:hover{
                background: var(--gray-600);
            }
        }
    }
`;