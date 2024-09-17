import styled, {css, createGlobalStyle} from "styled-components";


export const Nav = styled.nav`   
    position: relative;
`;

export const NavList = styled.ul`   
    gap: 0 16px;
`;

export const Icon = styled.i`   
    svg {
        path {
            fill: ${props => props.theme.colors.primary.color250};
        }
    }
`;

export const Arrow = styled.span`  
    position: relative;
    svg {
        path {
            fill: ${props => props.theme.colors.primary.color250}}
        }
    }
`;

export const Submenu = styled.ul`   
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 229px;
    padding: 12px;
    background-color: rgba(255,255,255,.05);
    border-radius: 8px;    
    z-index: 10;
    display: none;
`;

export const SubmenuItem = styled.li`   
    padding: 16px 18px;
    font-size: ${props => props.theme.fontSize.text.normal.normal4};
    font-weight: 600;
    color: white;

    > .link {
        gap: 0 12px;
    }

    ${Icon} {
        svg {
            path {
                fill: white
            }
        }
    }
        
    &.current,
    &:hover {
        color: ${props => props.theme.colors.secondary.color300};

        > .link {
            > ${Icon} {
                svg {
                    path {
                        fill: ${props => props.theme.colors.secondary.color300}
                    }
                }
            }      
        } 
    }
`;

export const NavItem = styled.li`   
    font-size: ${props => props.theme.fontSize.text.normal.normal4};
    font-weight: 600;
    color: ${props => props.theme.colors.primary.color250};

    &.current,
    &:hover {
        background-color: rgba(255,255,255,.05);
        border-radius: 8px;
        color: ${props => props.theme.colors.secondary.color300};
        > .link {
            > ${Icon} {
                svg {
                    path {
                        fill: ${props => props.theme.colors.secondary.color300}
                    }
                }
            }     
                
            > ${Arrow} {
                svg {
                    path {
                        fill: ${props => props.theme.colors.secondary.color300};       
                    }                 
                }
            }
        }
    }       

    >.link {
        gap: 12px;
        padding: 16px 20px;
    }

    &:hover {
        >${Submenu} {
            display: block;
        }
        >.link {
            ${Arrow} {
                transform: rotate(180deg);
            } 
        }
    }
`;

