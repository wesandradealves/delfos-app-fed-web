import styled, {css, createGlobalStyle} from "styled-components";


export const Nav = styled.nav`   

`;

export const NavList = styled.ul`   
    gap: 0 16px;
`;

export const Icon = styled.i`   
    svg {
        path {
            fill: ${props => props.theme.colors.color250};
        }
    }
`;

export const NavItem = styled.li`   
    font-size: ${props => props.theme.fontSize.text.normal.normal4};
    font-weight: 600;
    color: ${props => props.theme.colors.color250};
    .link {
        gap: 12px;
        padding: 16px 20px;
        &.current,
        &:hover {
            background-color: rgba(255,255,255,.05);
            border-radius: 8px;
            color: ${props => props.theme.colors.secondary.color300};
            ${Icon} {
                svg {
                    path {
                        fill: ${props => props.theme.colors.secondary.color300}
                    }
                }
            }
        }   
    }
`;