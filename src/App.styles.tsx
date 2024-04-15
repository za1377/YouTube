import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        border: none;
        font-family: 'Roboto', Sans-Serif;

        box-sizing: border-box !important;
        -webkit-box-sizing: border-box !important;
        -moz-box-sizing: border-box !important;
        -ms-box-sizing: border-box !important;
    }

    ::-webkit-scrollbar{
        width: 0%;
        background-color: transparent;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }
`;

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: ${ (props) => props.theme.background };
`;