"use client";
import { Container, Content, Nav, NavList, NavItem, Icon } from "./style";
import Logo from "../Logo";
import Link from "next/link";

export default function Header(props: any) {  
  return (<Content className="header w-full flex">
    <Container className="mx-auto w-full flex items-center justify-between">
        <Logo compact={true} tag="h1" />
        {props?.nav && (
          <Nav className="flex-1">
            <NavList className="flex">
              {props?.nav.map((item: any, index: any) => (
                <NavItem key={index}>
                  <Link className="flex" href={item?.url}>
                    {item?.icon && <Icon className={item?.icon} />}
                    {item?.label}
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        )}
    </Container>
  </Content>);
};