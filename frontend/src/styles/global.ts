import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root{
        --red-500: #e8625a;

        --white: #fff;

        --gray-100: #f8f8f8;
        --gray-200: #d7d7d7;
        --gray-300: #bbb;
        --gray-600: #323238;
        --gray-700: #29292e;
        --gray-800: #1a1d1f;
    }

    body{
        background: var(--gray-800);
        color: var(--gray-200);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, select, button{
        font: 400 1rem 'Open Sans', sans-serif;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
        color: var(--gray-100);
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5% // 14px
        }
    }
    
    button{
        cursor: pointer;
    }
`;