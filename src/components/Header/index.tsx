"use client";
import { Container, Content, Toolbar, UpdatedAt, Icon, Avatar, Text, Hello, Welcome, Headline } from "./style";
import Logo from "../Logo";
import Link from "next/link";
import Navigation from "../Navigation";
import { usePathname } from 'next/navigation';

export default function Header(props: any) {  
  const pathname = usePathname();

  return (<Content className="header w-full flex flex-col">
    <Container className="mx-auto w-full flex items-center justify-between">
        <Logo compact={1} tag="h1" />
        <Navigation pathname={pathname} data={[
          {
            url: '/dashboard',
            icon: `<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.463135 2.625C0.463135 1.60938 1.28345 0.75 2.33813 0.75H7.33813C8.35376 0.75 9.21313 1.60938 9.21313 2.625V7C9.21313 8.05469 8.35376 8.875 7.33813 8.875H2.33813C1.28345 8.875 0.463135 8.05469 0.463135 7V2.625ZM0.463135 12C0.463135 10.9844 1.28345 10.125 2.33813 10.125H7.33813C8.35376 10.125 9.21313 10.9844 9.21313 12V16.375C9.21313 17.4297 8.35376 18.25 7.33813 18.25H2.33813C1.28345 18.25 0.463135 17.4297 0.463135 16.375V12ZM18.5881 0.75C19.6038 0.75 20.4631 1.60938 20.4631 2.625V3.875C20.4631 4.92969 19.6038 5.75 18.5881 5.75H12.3381C11.2834 5.75 10.4631 4.92969 10.4631 3.875V2.625C10.4631 1.60938 11.2834 0.75 12.3381 0.75H18.5881ZM10.4631 8.875C10.4631 7.85938 11.2834 7 12.3381 7H18.5881C19.6038 7 20.4631 7.85938 20.4631 8.875V10.125C20.4631 11.1797 19.6038 12 18.5881 12H12.3381C11.2834 12 10.4631 11.1797 10.4631 10.125V8.875ZM18.5881 13.25C19.6038 13.25 20.4631 14.1094 20.4631 15.125V16.375C20.4631 17.4297 19.6038 18.25 18.5881 18.25H12.3381C11.2834 18.25 10.4631 17.4297 10.4631 16.375V15.125C10.4631 14.1094 11.2834 13.25 12.3381 13.25H18.5881Z" fill="#9392B5"/></svg>`,
            label: 'Geral'
          },
          {
            url: '/tickets',
            icon: `<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.21313 3.75H17.7131V11.25H5.21313V3.75ZM20.2131 0C21.5803 0 22.7131 1.13281 22.7131 2.5V5.625C21.6584 5.625 20.8381 6.48438 20.8381 7.5C20.8381 8.55469 21.6584 9.375 22.7131 9.375V12.5C22.7131 13.9062 21.5803 15 20.2131 15H2.71313C1.30688 15 0.213135 13.9062 0.213135 12.5V9.375C1.22876 9.375 2.08813 8.55469 2.08813 7.5C2.08813 6.48438 1.22876 5.625 0.213135 5.625V2.5C0.213135 1.13281 1.30688 0 2.71313 0H20.2131ZM3.96313 11.25C3.96313 11.9531 4.51001 12.5 5.21313 12.5H17.7131C18.3772 12.5 18.9631 11.9531 18.9631 11.25V3.75C18.9631 3.08594 18.3772 2.5 17.7131 2.5H5.21313C4.51001 2.5 3.96313 3.08594 3.96313 3.75V11.25Z" fill="#9392B5"/></svg>            `,
            label: 'Tickets'
          }          
        ]} />
        <Toolbar className="flex-1 flex justify-end items-center flex">
          <UpdatedAt className="items-center flex">
            <Icon className="fa-solid fa-rotate" />
            <Text className="flex-1">
              <span>Atualizado em:</span>
              26 Jun 2024 às 16:20
            </Text>
          </UpdatedAt>
          <Link href="#">
            <Icon className="fa-solid fa-bell" />
          </Link>   
          <Link href="#">
            <Icon className="fa-solid fa-right-from-bracket" />
          </Link>  
            <Link href="/dashboard">
            <Avatar className="flex justify-center items-center">
              M
            </Avatar>
          </Link>
        </Toolbar>
    </Container>
    <Container className="mx-auto w-full flex items-center justify-between">
        <Hello>
          <Welcome>Olá, [Nome do usuário]</Welcome>
          <Headline>Bem-vindo (a) ao Delfos, encontre aqui todos os dados de atendimento ao cliente Equatorial.</Headline>
        </Hello>
    </Container>    
  </Content>);
};