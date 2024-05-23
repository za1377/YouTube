import styled from "styled-components";

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

`