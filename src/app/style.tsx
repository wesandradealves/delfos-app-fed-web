import styled, {css, createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const App = styled.div`   
    background-color: ${props => props.theme.colors.primary.default.color};
    color: white;
`;
