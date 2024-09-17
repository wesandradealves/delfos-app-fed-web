"use client";
import { Container, Content, Toolbar, UpdatedAt, Icon, Avatar, Text, Hello, Welcome, Headline } from "./style";
import Logo from "@/components/Logo";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { usePathname } from 'next/navigation';

export default function Header(props: any) {  
  const pathname = usePathname();

  return (<Content data-component="Header" className="header w-full flex flex-col">
    <Container className="mx-auto w-full flex items-center justify-between">
        <Logo compact={1} tag="h1" />
        <Navigation pathname={pathname} data={[
          {
            url: '/dashboard',
            icon: `<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.463135 2.625C0.463135 1.60938 1.28345 0.75 2.33813 0.75H7.33813C8.35376 0.75 9.21313 1.60938 9.21313 2.625V7C9.21313 8.05469 8.35376 8.875 7.33813 8.875H2.33813C1.28345 8.875 0.463135 8.05469 0.463135 7V2.625ZM0.463135 12C0.463135 10.9844 1.28345 10.125 2.33813 10.125H7.33813C8.35376 10.125 9.21313 10.9844 9.21313 12V16.375C9.21313 17.4297 8.35376 18.25 7.33813 18.25H2.33813C1.28345 18.25 0.463135 17.4297 0.463135 16.375V12ZM18.5881 0.75C19.6038 0.75 20.4631 1.60938 20.4631 2.625V3.875C20.4631 4.92969 19.6038 5.75 18.5881 5.75H12.3381C11.2834 5.75 10.4631 4.92969 10.4631 3.875V2.625C10.4631 1.60938 11.2834 0.75 12.3381 0.75H18.5881ZM10.4631 8.875C10.4631 7.85938 11.2834 7 12.3381 7H18.5881C19.6038 7 20.4631 7.85938 20.4631 8.875V10.125C20.4631 11.1797 19.6038 12 18.5881 12H12.3381C11.2834 12 10.4631 11.1797 10.4631 10.125V8.875ZM18.5881 13.25C19.6038 13.25 20.4631 14.1094 20.4631 15.125V16.375C20.4631 17.4297 19.6038 18.25 18.5881 18.25H12.3381C11.2834 18.25 10.4631 17.4297 10.4631 16.375V15.125C10.4631 14.1094 11.2834 13.25 12.3381 13.25H18.5881Z" fill="#9392B5"/></svg>`,
            label: 'Geral',
            below: [
              {
                url: '/dashboard/modules/call-center',
                icon: `
                  <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7060_23597)">
                    <path d="M8.70703 9.375L8.75 14.1875C8.75 14.9609 8.10547 15.5625 7.375 15.5625H6.6875C5.14062 15.5625 3.9375 14.3594 3.9375 12.8125V10.793C3.9375 9.24609 5.14062 8 6.6875 8H7.33203C8.0625 8 8.70703 8.64453 8.70703 9.375ZM11.5 -0.25C17.6445 -0.25 22.2852 4.90625 22.5 10.75V16.9375C22.5 19.043 20.7812 20.7188 18.7188 20.7188H13.9492C13.6055 21.3633 12.918 21.75 12.1875 21.75H10.7695C9.52344 21.75 8.53516 20.6328 8.75 19.3008C8.96484 18.3125 9.86719 17.625 10.8555 17.625H12.1875C12.918 17.625 13.6055 18.0547 13.9492 18.6562H18.7188C19.6641 18.6562 20.4375 17.9258 20.4375 16.9375V10.75C20.4375 5.85156 16.3984 1.85547 11.5 1.85547C6.55859 1.85547 2.5625 5.85156 2.5625 10.75V12.4688C2.5625 13.0703 2.00391 13.5 1.48828 13.5C0.929688 13.5 0.5 13.0703 0.5 12.4688V10.75C0.671875 4.90625 5.3125 -0.25 11.5 -0.25ZM16.3125 15.5625H15.625C14.8516 15.5625 14.25 14.9609 14.25 14.1875V9.41797C14.25 8.64453 14.8516 8 15.625 8H16.3125C17.8164 8 19.0625 9.24609 19.0625 10.793V12.8125C19.0625 14.3594 17.8164 15.5625 16.3125 15.5625Z" fill="#EBCF59"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_7060_23597">
                    <rect width="22" height="22" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                    </defs>
                  </svg>
                `,
                label: 'Call Center'
              }              
            ]
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