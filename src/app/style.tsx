import styled, {css, createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;  
        min-width: ${props => props.theme._breakpoints.mobile.xs};
        #primary {
            min-width: inherit
        }
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body,
    div,
    span,
    object,
    iframe,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    code,
    em,
    img,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    b,
    u,
    i,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    main,
    canvas,
    embed,
    footer,
    header,
    nav,
    section,
    video {
        border: 0;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: none;
        text-decoration: none;
    }

    footer,
    header,
    nav,
    section,
    main {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    input {
        -webkit-appearance: none;
        border-radius: 0;
    }

    button,
    select,
    input {
        border: 0;
        outline: 0;
        background-color: transparent;
    }    
`;

export const App = styled.div`   

`;
