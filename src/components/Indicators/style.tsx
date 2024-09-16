import styled, {css, createGlobalStyle} from "styled-components";

export const Indicator = styled.div`   
    border-radius: 8px;
    padding: 24px;
    background-color: ${props => props.theme.colors.dark.color900.color};
`;