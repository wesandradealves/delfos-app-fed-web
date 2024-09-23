import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.div`

`;

export const Collapser = styled.button`

`;

export const Title = styled.h3`   
    font-size: ${props => props.theme._fontSize.text.normal.normal3};
    font-weight: 600;
    padding: 16px 16px 0;
    font-size: ${props => props.theme._fontSize.text.normal.normal4};
    .icon {
        cursor: pointer;
        &::before {
            pointer-events: none;
        }
    }
`;