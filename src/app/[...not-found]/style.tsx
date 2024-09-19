import styled, {css, createGlobalStyle} from "styled-components";
import bg from '@/assets/img/bg.jpg';

export const Content = styled.div`   
    line-height: 1.4;
    color: ${props => props.theme._colors.secondary.default};
    background: url(${bg.src}) center 0 / cover no-repeat;
    > * {
        position: relative;
        z-index: 2;
    }
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme._colors.primary.default};
        content: '';
        z-index: 1;
        opacity: .85;
        backdrop-filter: blur(40px);  
    }        
    .btn {
        box-shadow: 0px 19px 31px -17px rgba(255,255,255,.2)
    }
`;

export const Error = styled.h1`   
    font-weight: 700;
    font-size: ${props => props.theme._fontSize.text.large.large3};
`;

export const Text = styled.p`   
    font-weight: 300;
    font-size: ${props => props.theme._fontSize.text.normal.normal5};
    margin-bottom: 36px;
`;
