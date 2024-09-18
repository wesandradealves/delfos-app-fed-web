import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    status?: any;
    ins?: any;
}

export const Cards = styled.ul`   
    margin: 0 -12px -24px;
`;

export const Card = styled.li<Typo>`  
    padding: 0 12px 24px;
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
    gap: 24px 0;
`; 

export const CardHeader = styled.div`   
`; 

export const CardContent = styled.div`   
`; 

export const CardCaption = styled.div`  
    gap: 30px;
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

export const Caption = styled.ul`   
    gap: 32px;
`;

export const CardSubtitle = styled.small`   
    font-size: ${props => props.theme._fontSize.text.normal.normal7};
    font-weight: 600;
    line-height: 120%;   
    margin-bottom: 8px;
`; 

export const CaptionItem = styled.li<Typo>`
    gap: 12px;
    font-size: ${props => props.theme._fontSize.text.normal.normal6};
    font-weight: 600;
    line-height: 126%;   
    .icon {
        font-size: ${props => props.theme._fontSize.text.normal.normal1};
    }
    span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }   
    &::before {
        height: 12px;
        width: 12px;
        display: block;
        border-radius: 999px;
        ${(props) => props?.status && css`
            content: '';
            ${props.status == 'critical' && `background-color: ${props.theme._colors.error.color400};`}
            ${props.status == 'alert' && `background-color: ${props.theme._colors.warning.color300};`}
            ${props.status == 'non-critical' && `background-color: ${props.theme._colors.success.color400};`}
        `}           
    }
`;