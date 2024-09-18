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
        font-size: ${props => props.theme._fontSize.text.normal.normal4};
        border-radius: ${props => props.theme._general.borderRadius.default};
        border: 0;
        &.primary {
            background-color: ${props => props.theme._colors.secondary.color300};
            color: ${props => props.theme._colors.primary.default};
        }        
    }
`;