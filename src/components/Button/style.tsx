import styled, {css, createGlobalStyle} from "styled-components";


export const Content = styled.span`   
    .btn {
        padding: 14px 18px;
        background-color: whitesmoke;
        color: black;
        text-align: center;
        min-width: 116px;
        font-weight: 600;
        gap: 12px;
        line-height: 120%; /* 21.6px */    
        font-size: ${props => props.theme._fontSize.text.normal.normal5};
        border-radius: ${props => props.theme._general.borderRadius.default};
        border: 1px transparent solid;
        &.primary {
            background-color: ${props => props.theme._colors.secondary.color300};
            color: ${props => props.theme._colors.primary.default};
            &:hover{
                border-color: ${props => props.theme._colors.secondary.color300};
                color: ${props => props.theme._colors.secondary.color300};
                background-color: transparent;
            }
        }        
        &.secondary {
            border-color: white;
            color: white;
            background-color: transparent;
            &:hover {
                background-color: white;
                color: ${props => props.theme._colors.primary.default};
            }
        }
    }
`;