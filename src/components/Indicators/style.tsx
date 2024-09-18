import styled, {css, createGlobalStyle} from "styled-components";


export const Indicator = styled.section`   
    border-radius: 8px;
    padding: 36px;
    background-color: ${props => props.theme._colors.dark.color900};
`;

export const Heading = styled.div`   
    gap: 12px;
`;

export const HeadingTop = styled.div`   
    gap: 12px;
`;

export const Title = styled.h3`   
    font-size: ${props => props.theme._fontSize.text.normal.normal3};
    font-weight: 600;
    gap: 12px;
    .icon {
        height: 22px;
        width: 22px;
        border-radius: 999px;
        background-color: ${props => props.theme._colors.primary.color200};
        color: ${props => props.theme._colors.primary.default};
        font-size: ${props => props.theme._fontSize.text.normal.normal5};    
    }
`;

export const Text = styled.p`   
    font-size: ${props => props.theme._fontSize.text.normal.normal6};
    font-weight: 400;
`;