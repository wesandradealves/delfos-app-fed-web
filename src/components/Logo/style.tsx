import styled, {css, createGlobalStyle} from "styled-components";

interface Typo {
    compact?: boolean;
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

