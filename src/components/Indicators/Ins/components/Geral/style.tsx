import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    status?: any;
}

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
    font-size: ${props => props.theme._fontSize.text.normal.normal2};
    font-weight: 600;
    line-height: 120%; /* 28.8px */      
`;

export const GeralText = styled.p`   
    font-size: ${props => props.theme._fontSize.text.medium.medium4};
    font-weight: 600;
    line-height: 130%; /* 41.6px */
`;

export const GeralSubtitle = styled.small`   
    font-size: ${props => props.theme._fontSize.text.normal.normal5};
    font-weight: 400;
    line-height: 120%; /* 19.2px */    
`;

export const GeralContent = styled.div`   

`;

export const Column = styled.div`   

`;

export const GeralStatus = styled.span<Typo>`   
    display: block;
    height: 16px;
    width: 16px;
    display: block;
    border-radius: 999px;
    background-color: ${(props) => props.theme._colors.success.color400};
    ${(props) => props?.status && css`
        ${props.status == 'critical' && `background-color: ${props.theme._colors.error.color400};`}
        ${props.status == 'alert' && `background-color: ${props.theme._colors.warning.color300};`}
        ${props.status == 'non-critical' && `background-color: ${props.theme._colors.success.color400};`}
    `} 
`;