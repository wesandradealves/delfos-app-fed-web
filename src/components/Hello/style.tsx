import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.div`   
    position: relative;
`;

export const Hello = styled.div`   
    color: white;
    font-weight: 500;
    line-height: 1.6;
`;

export const Welcome = styled.h2`   
    font-size: ${props => props.theme._fontSize.text.medium.medium4};
`;

export const Headline = styled.p`   
    font-size: ${props => props.theme._fontSize.text.normal.normal5};
    font-weight: 400;
    color: ${props => props.theme._colors.grey.color400};
`;

export const Container = styled.div`   
    padding: ${props => props.theme._general.gaps.default};
    padding-top: 0;
    gap: 8px 24px;
    position: relative;
`;