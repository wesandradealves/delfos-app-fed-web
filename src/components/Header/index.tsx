"use client";
import { Container, Content } from "./style";
import Logo from "../Logo";

export default function Header(props: any) {  
  return (<Content className="header w-full flex">
    <Container className="container mx-auto">
        <Logo compact={true} tag="h1" />
    </Container>
  </Content>);
};