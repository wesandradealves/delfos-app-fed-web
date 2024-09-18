import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    status?: any;
}

export const Container = styled.ul`   
    gap: 32px;
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