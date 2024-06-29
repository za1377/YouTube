import styled from "styled-components";

export const StyledContent = styled.div`
    width: 100%;
    height: 94.2%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5.5vh 88.7vh;
    position: relative;
`

export const LoadingBackDrop = styled.div`
    width: 100%;
    height: 94.2%;
    background-color: ${ ({theme}) => theme.background};
    opacity: 0.4;
    z-index: 1000000;
    position: absolute;
`