import styled from "styled-components";

export const StyledMenu = styled.div`
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const MenuItem = styled.div`
    display: flex;
    color: ${({ theme }) => theme.text};
    border-radius: 0%.5rem;

    &.small{

        font-size: 26px;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        padding: 1rem 0;

        p{
            font-size: 10px;
        }
    }

    &:hover{
        background-color: ${({ theme }) => theme.grey2};
        cursor: pointer;
    }
    
`