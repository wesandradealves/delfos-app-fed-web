import styled, {css} from "styled-components";


export const Content = styled.div`   

`;

export const Container = styled.div`   
    padding: 32px 40px;
    padding-top: 0;
`;

export const Dashboard = styled.main`   
    .rcs-inner-handle {
        background-color: ${props => props.theme._colors.secondary.color300};
        border-radius: 0;
    }
`;