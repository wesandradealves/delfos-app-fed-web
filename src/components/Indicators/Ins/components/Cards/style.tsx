import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    status?: any;
    ins?: any;
}

export const Container = styled.ul`   
`;

export const Card = styled.li<Typo>`  
    ${(props) => props?.ins && css`
        ${props.ins < 85 && `color: ${props.theme._colors.error.color400};`}
        ${(props.ins >= 85 && props.ins <= 90) && `color: ${props.theme._colors.warning.color300};`}
        ${props.ins > 90 && `color: ${props.theme._colors.success.color400};`}
    `}   
`;

export const CardInner = styled.div`   
    padding: 12px;
    background-color: ${props => props.theme._colors.dark.color700};
    border-radius: 8px;  
`; 

export const CardHeader = styled.div`   
`; 

export const CardContent = styled.div`   
`; 

export const CardCaption = styled.div`  
    .icon {
        font-size: ${props => props.theme._fontSize.text.normal.normal1};
    }
`; 

export const CardTitle = styled.h3`   
    font-size: ${props => props.theme._fontSize.text.normal.normal4};
    font-weight: 600;
    line-height: 120%; /* 21.6px */
`; 

export const CardIns = styled.p`  
    font-size: ${props => props.theme._fontSize.display.display3}; 
    font-weight: 600;
    line-height: 130%; /* 62.4px */
`; 

export const CardLinePosition= styled.p`   
    font-size: ${props => props.theme._fontSize.text.normal.normal4};
    font-weight: 400;
    line-height: 120%; /* 21.6px */
`; 

export const CardSubtitle = styled.small`   
    font-size: ${props => props.theme._fontSize.text.normal.normal7};
    font-weight: 600;
    line-height: 120%;   
`; 