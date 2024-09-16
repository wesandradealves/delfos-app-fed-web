"use client";
import { Content, Error, Text } from "./style";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
export default function NotFound() {
  return (<Content className="flex text-center flex-col flex-wrap items-center justify-center h-screen w-screen">
    <Logo compact={1} />
    <Error>Oops, página<br/>não encontrada</Error>
    <Text className="d-block text-center">Sentimos muito pela inconveniência mas parece que você<br/>está tentando acessar uma página indisponível no momento.</Text>
    <Button className="primary" tag="a" href="/">Voltar para a página inicial</Button>
  </Content>)
}