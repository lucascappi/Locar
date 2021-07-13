import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    width: min(100%, 22rem);

    background: var(--gray-700);

    padding: 3.125rem 1.875rem;
    border-radius: .25rem;

    h2{
        font-size: 1.5rem;
        text-align: center;

        margin-bottom: 1rem;
    }

    p{
        margin-bottom: 3rem;
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        input{
            width: 100%;
            height: 2.5rem;

            color: var(--gray-200);

            background: var(--gray-600);

            border: 1px solid var(--gray-300);
            border-radius: .25rem;

            padding: 0 .625rem;
            outline: none;
            border: none;

            transition: box-shadow .15s;

            & + input{
                margin-top: 1rem;
            }

            &:focus{
                box-shadow: 0 0 0 2px #e8625a33;
            }
        }
        
        button{
            width: 100%;
            height: 2.5rem;

            border: none;
            border-radius: .25rem;
            margin-top: 1.125rem;

            color: var(--white);

            background: var(--red-500);

            transition: box-shadow .15s;
            
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover:not(:disabled){
                box-shadow: 0 0 0 4px #e8625a22;
            }

            &:disabled{
                opacity: .6;
                cursor: not-allowed;
            }
        }
    }
`;