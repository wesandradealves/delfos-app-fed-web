import styled, {css, createGlobalStyle} from "styled-components";


export const Content = styled.header`   
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

export const Toolbar = styled.div`   
    gap: 0 12px;
    a {
        &:hover {
            color: ${props => props.theme._colors.secondary.color300};
        }
    }
    .icon {
        padding: 16px 18px;
    }        
`;

export const UpdatedAt = styled.div`   
    gap: 0 12px;
    padding-right: 48px;
`;

export const Icon = styled.i`   
    
`;

export const Avatar = styled.div`   
    height: 54px;
    width: 54px;
    border-radius: 999px;
    background-color: ${props => props.theme._colors.secondary.color100};
    font-size: ${props => props.theme._fontSize.text.normal.normal2};
    text-transform: uppercase;
    color: black;
    font-weight: 600;
`;

export const Text = styled.p`   
    font-size: ${props => props.theme._fontSize.text.normal.normal5};
    width: 167px;
    color: ${props => props.theme._colors.secondary.color300};
    line-height: 2;
    font-weight: 600;
    span {
        font-weight: normal;
        color: white;
        display: block;
        font-size: ${props => props.theme._fontSize.text.normal.normal6};
    }
`;

export const Container = styled.div`   
    padding: ${props => props.theme._general.gaps.default};
    gap: 0 24px;
    position: relative;
    &:not(:first-of-type) {
        padding-top: calc(32px/2)
    }
`;

