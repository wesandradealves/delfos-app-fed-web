import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    position?: any;
}

export const Text = styled.span<Typo>`
    font-size: ${props => props.theme._fontSize.text.normal.normal7};
    font-weight: 400;
    line-height: 120%; /* 14.4px */
    color: white;
    padding: 12px;
    background-color: ${props => props.theme._colors.dark.color50};
    border-radius: 8px;  
    position: absolute;
    width: 320px;
    z-index: 2;

    &::after {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent ${props => props.theme._colors.dark.color50} transparent;
        transform: rotate(0deg);
        position: absolute;        
        content: '';
    }

    ${(props) => props?.position && css`
        ${props.position == 'top' && `
            bottom: calc(100% + 16px);
            left: -8px;
            &::after {
                transform: rotate(180deg);
                top: 100%;
                left: 11px;        
            }            
        `}
    `}      
`;

export const Content = styled.p`
    position: relative;
    &:hover ${Text} {
        display: block
    }
    .icon {
        height: 22px;
        width: 22px;
        border-radius: 999px;
        background-color: ${props => props.theme._colors.primary.color200};
        color: ${props => props.theme._colors.primary.default};
        font-size: ${props => props.theme._fontSize.text.normal.normal5};    
    }        
`;

