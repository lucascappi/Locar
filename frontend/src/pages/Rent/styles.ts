import styled from "styled-components";

export const Container = styled.div`
    width: min(100%, 1120px);

    margin: 4rem auto 0;
    padding: 0 2rem 10vh;

    main{
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(2, 1fr);

        section{
            min-width: 250px;
            flex: 1;

            h1{
                display: flex;
                align-items: center;
                font-size: 2.125rem;

                &::after{
                    content: '';
                    flex: 1;
                    height: 1px;

                    margin-left: 1rem;

                    background: linear-gradient(to left, var(--gray-700)30%, transparent 90%);
                }
            }

            p{  
                font-size: 1.25rem;
                color: var(--gray-300);

                strong{
                    color: var(--gray-200);
                }
            }

            > div{
                margin-top: 1rem;

                > strong{
                    display: block;
                    margin-bottom: 1rem;

                    color: var(--gray-200);
                    font-weight: 700;
                    font-size: 1.125rem;
                    
                    span{
                        color: var(--gray-300);
                        font-weight: 400;
                    }
                }

                div.date-container{
                    display: grid;
                    gap: 1rem;
                    grid-template-columns: repeat(2, 1fr);

                    @media(max-width: 960px){
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            }
        }

        img{
            width: min(100%, 480px);

            margin-left: auto;
            border-radius: .25rem;

            background: linear-gradient(to bottom, var(--white), var(--gray-300));
        }

        @media(max-width: 720px){
            grid-template-columns: repeat(1, 1fr);

            img{
                margin-left: 0;
            }
        }
    }

    footer{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 1.875rem;

        a{
            color: var(--gray-300);
            transition: color .2s;

            &:hover{
                color: var(--red-500);
            }
        }

        & > div{
            flex: 1;
            height: 1px;

            background: linear-gradient(to right, transparent, var(--gray-700)20%, 80%, transparent);

            margin: 0 1.5rem;
        }

        button{
            width: 10rem;
            height: 2.5rem;

            border: none;
            border-radius: .25rem;

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