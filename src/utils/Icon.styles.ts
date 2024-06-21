import styled, { keyframes } from "styled-components";

const beats = keyframes`
    0%{
        transform: scale(0.8);
    }
    50%{
        transform: scale(0.9);
    }
    100%{
        transform: scale(0.8);
    }
`

export const Icon = styled.div< {$backgroundShow? : boolean} >`
    background-color: ${ ({theme, $backgroundShow}) => $backgroundShow ? theme.grey2 : "transparent" };
    border-radius: 100rem;
    color: ${ ({theme}) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;

    &.menu{
        &:hover{
            background-color: ${({theme}) => theme.grey2};
        }
    }

    &.listenign {
        background-color: ${({theme}) => theme.youtubeRed};
        color: ${({theme}) => theme.white};
        animation: ${beats} 1s linear infinite;
    }
`