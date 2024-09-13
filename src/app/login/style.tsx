import styled, {css, createGlobalStyle} from "styled-components";
import bg from '@/assets/img/bg.jpg';

export const GlobalStyle = createGlobalStyle`
`;

export const Content = styled.section`   
    background-color: ${props => props.theme.colors.primary.default.color};
    color: white;
`;

export const Aside = styled.aside`   
    padding: 45px;
    background: url(${bg.src}) center center / cover no-repeat transparent;
    position: relative;
    * {
        position: inherit;
        z-index: 2;
    }
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.primary.default.color};
        content: '';
        z-index: 1;
        opacity: .7;
    }
`;

export const Title = styled.h1`   
    font-size: ${props => props.theme.fontSize.display.display3};
    color: ${props => props.theme.colors.secondary.default.color};
    line-height: 130%;
    font-weight: 600;
    text-align: right;
`;

export const Arrow = styled.svg`   
    position: absolute;
    bottom: 0;
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop.fullhd}) {
        bottom: 140px;
    }
    right: -90px;
`;