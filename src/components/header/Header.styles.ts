import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div `
    width: 100%;
    height: 5.8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0.2rem 0rem;
`

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const SearchSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const HeaderMoreSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
`

export const LogoSection = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.2rem;
`

export const SearchBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.5rem;
    width: 33.5vw;
    border-radius: 100rem;
    border: 1px solid ${ ({theme}) => theme.grey2};
    background-color: ${ ({theme}) => theme.grey2};
    overflow: hidden;
    margin-top: 3%;

    input{
        background-color: ${ ({theme}) => theme.background};
        color: ${ ({theme}) => theme.text};
        font-size: inherit;
        padding-left: 1rem;
    }
`