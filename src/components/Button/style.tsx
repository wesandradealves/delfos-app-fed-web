import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.span`   
    .btn {
        padding: 16px 18px;
        background-color: whitesmoke;
        color: black;
        text-align: center;
        min-width: 116px;
        font-weight: 600;
        line-height: 120%; /* 21.6px */    
        font-size: ${props => props.theme.fontSize.text.normal.normal4};
        border-radius: ${props => props.theme.general.borderRadius.default};
        border: 0;
    }

    &.primary {
        .btn {
            background-color: ${props => props.theme.colors.secondary.color300.color};
            color: ${props => props.theme.colors.primary.default.color};
        }
    }
`;