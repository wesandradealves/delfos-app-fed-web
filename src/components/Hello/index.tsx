"use client";
import { Container, Content, Welcome, Headline } from "@/components/Hello/style";

export default function Hello(props: any) {  
  return (<Content data-component="Hello" className="hello">
        <Container className="mx-auto w-full flex flex-col gap-y-6 gap-x-2">
            <Welcome>Olá, [Nome do usuário]</Welcome>
            <Headline>Bem-vindo (a) ao Delfos, encontre aqui todos os dados de atendimento ao cliente Equatorial.</Headline>
        </Container>
    </Content>);
};