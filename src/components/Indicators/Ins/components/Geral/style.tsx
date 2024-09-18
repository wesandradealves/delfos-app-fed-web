import styled, {css, createGlobalStyle} from "styled-components";

export const Container = styled.ul`   
`;

export const GeralItem = styled.li`   

`;

export const GeralItemInner = styled.div`   
    padding: 32px 24px;
    background-color: ${props => props.theme._colors.dark.color700};
    border-radius: 8px;  
`;

export const GeralTitle = styled.h3`  
    gap: 12px;
    font-size: ${props => props.theme._fontSize.text.normal.normal2};
    font-weight: 600;
    line-height: 120%; /* 28.8px */    
    .icon {
        height: 22px;
        width: 22px;
        border-radius: 999px;
        background-color: ${props => props.theme._colors.primary.color200};
        color: ${props => props.theme._colors.primary.default};
        font-size: ${props => props.theme._fontSize.text.normal.normal5};    
    }    
`;
