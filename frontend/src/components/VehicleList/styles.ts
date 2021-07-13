import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: 4rem;

    @media (max-width: 1020px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 720px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const VehicleContent = styled(Link)`
    position: relative;

    padding-bottom: 1.5rem;

    strong{
        display: block;

        font-size: 1.5rem;
        font-weight: 600;

        transition: color .15s;

        margin-bottom: .5rem;
    }

    p{
        font-size: .875rem;
        color: var(--gray-300);

        margin-bottom: 1rem;
    }

    img{
        width: 100%;

        transition: box-shadow .2s;
        border-radius: .25rem;

        background: linear-gradient(to bottom, var(--white), var(--gray-200));
    }

    &:hover {
        strong{
            color: var(--red-500);
        }
        img{
            box-shadow: 0 0 0 2px #e8625a33;
        }
    }

    &::before{
        content: '';
        position: absolute;
        height: 1px;

        background: linear-gradient(to right, var(--gray-700)30%, transparent 90%);

        bottom: 0;
        right: 3rem;
        left: 0;
    }
`

