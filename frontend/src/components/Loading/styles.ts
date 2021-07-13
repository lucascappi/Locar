import styled from "styled-components";

interface ContainerProps{
    size: 'small' | 'medium' | 'large';
    color: string;
}

export const Container = styled.div<ContainerProps>`
    align-self: center;
    justify-self: center;

    width: ${(props) => {
        switch(props.size){
            case 'small':
                return '1rem';
            case 'medium':
                return '2rem';
            case 'large':
                return '4rem';
        }
    }};
    height: ${(props) => {
        switch(props.size){
            case 'small':
                return '1rem';
            case 'medium':
                return '2rem';
            case 'large':
                return '4rem';
        }
    }};

    border-width: ${(props) => {
        switch(props.size){
            case 'small':
                return '1px';
            case 'medium':
                return '2px';
            case 'large':
                return '4px';
        }
    }};
    border-color: ${(props) => {
        switch(props.color){
            case 'red':
                return 'var(--red-500)';
            case 'gray':
                return 'var(--gray-100)';
        }
    }};

    border-radius: 50%;
    border-bottom: 1px solid transparent;
    border-style: solid;

    animation: loading 1s infinite ease;

    @keyframes loading{
        100%{
            transform: rotate(360deg);
        }
    }
`;