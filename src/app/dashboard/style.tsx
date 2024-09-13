import styled, {css} from "styled-components";

export const Content = styled.div`   
    @keyframes opacity {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    animation: opacity 600ms linear forwards;
`;

export const Container = styled.div`   
    padding: ${props => props.theme.general.gaps.default};
    padding-top: 0;
`;

export const Dashboard = styled.main`   

`;