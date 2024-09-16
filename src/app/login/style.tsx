import styled, {css, createGlobalStyle} from "styled-components";
import bg from '@/assets/img/bg.png';


export const GlobalStyle = createGlobalStyle`
`;

export const Content = styled.div`   

`;

export const Aside = styled.aside`   
    padding: 45px;
    background: url(${bg.src}) right center / cover no-repeat transparent;
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
    font-size: ${props => props.theme.fontSize.text.medium.medium3};
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop.lg}) {
        font-size: ${props => props.theme.fontSize.display.display2};
    }
    color: ${props => props.theme.colors.secondary.default.color};
    line-height: 130%;
    font-weight: 600;
    text-align: right;
    position: relative;
`;

export const Arrow = styled.svg`   
    right: -90px;
    position: absolute;
    bottom: 0;
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop.fullhd}) {
        position: absolute;
        bottom: 120px;
    }
`;