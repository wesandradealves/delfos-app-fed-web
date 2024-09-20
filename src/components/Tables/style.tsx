import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    key?:any,
    value?:any
}

export const Table = styled.div`   
`;

export const Row = styled.div`   
`;

export const Text = styled.p`  
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;  
`;

export const Col = styled.div<Typo>`   
    padding: 12px 0;
    font-size: ${props => props.theme._fontSize.text.normal.normal6};
    font-weight: 600;
    line-height: 126%; /* 17.64px */

    .tooltip {
        .icon {
            width: 14px;
            height: 14px;
            font-size: ${props => props.theme._fontSize.text.normal.normal9};
        }
    }

    ${(props) => props?.key && props?.value && css`
    `}   
`;

export const Tbody = styled.div`   
    ${Col} {
        padding: 10px 0;
        font-weight: 400;
    }
    ${Row} {
        padding: 12px;
        background-color: ${props => props.theme._colors.dark.color700};
        border-radius: 8px;      
    }
`;

export const Thead = styled.div`   
    padding: 0 12px;
`;