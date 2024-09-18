import styled, {css, createGlobalStyle} from "styled-components";


export const Content = styled.section`
    color: white;
    gap: 16px 12px;
    .icon {
        width: auto;
        color: ${props => props.theme._colors.secondary.color300};
        font-size: ${props => props.theme._fontSize.text.normal.normal8};
        svg {
            height: 22px;
            width: inherit;
            fill {
                path: ${props => props.theme._colors.secondary.color300}
            }
        }    
    }
`;

export const Title = styled.h2`
    font-size: ${props => props.theme._fontSize.text.normal.normal1};
    font-weight: 600;
`;

