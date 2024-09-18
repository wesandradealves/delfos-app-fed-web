import styled, {css, createGlobalStyle} from "styled-components";


export const Form = styled.form`   
    padding: ${props => props.theme._general.gaps.default};
    svg {
        max-width: 100%;
    }
    gap: 56px;
`;

export const FormGroup = styled.div`   
    gap: 32px;
`;