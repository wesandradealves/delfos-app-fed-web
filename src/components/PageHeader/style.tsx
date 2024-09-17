import styled, {css, createGlobalStyle} from "styled-components";


export const Content = styled.div`
    color: white;
    margin-bottom: 16px;
    gap: 16px 12px;
`;

export const Icon = styled.i`
    width: auto;
    height: 22px;
    svg {
        height: inherit;
        width: inherit;
    }
`;

export const Title = styled.h2`
    font-size: ${props => props.theme.fontSize.text.normal.normal1};
    font-weight: 600;
`;

