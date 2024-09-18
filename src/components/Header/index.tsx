"use client";
import { Container, Content, Toolbar, UpdatedAt, Avatar, Text } from "@/components/Header/style";
import Logo from "@/components/Logo";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import { useEffect, useState } from "react";
import { fetchData } from "@/utils";

export default function Header(props: any) {  
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<any>(null);

  useEffect(() => {
    if(!navigation) {
      fetchData('/data/data.json').then(response => {
        if(response?.navigation) setNavigation(response?.navigation)
      }).catch(error => console.error(error));      
    }
  }, [navigation]);

  return (<Content data-component="Header" className="header w-full flex flex-col">
    <Container className="mx-auto w-full flex flex-wrap items-center justify-between">
        <Logo compact={1} tag="h1" />
        {navigation && <Navigation pathname={pathname} data={navigation} />}
        <Toolbar className="flex flex-wrap justify-end items-center flex">
          <UpdatedAt className="items-center hidden xl:flex">
            <Icon data="fa-solid fa-rotate" />
            <Text className="flex-1">
              <span>Atualizado em:</span>
              26 Jun 2024 às 16:20
            </Text>
          </UpdatedAt>
          <Link className="hidden md:block" href="#">
            <Icon data="fa-solid fa-bell" />
          </Link>   
          <Link className="hidden md:block" href="#">
            <Icon data="fa-solid fa-right-from-bracket" />
          </Link>  
            <Link href="/dashboard">
            <Avatar className="flex justify-center items-center">
              M
            </Avatar>
          </Link>
        </Toolbar>
    </Container>
  </Content>);
};