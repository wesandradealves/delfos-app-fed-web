import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    compact?: any;
}

export const Content = styled.div<Typo>`
    ${({ compact }) => compact && css`
        .logo {
            svg {
                width: 40px;
                height: 40px;
            }
        }
    `}  
`;

