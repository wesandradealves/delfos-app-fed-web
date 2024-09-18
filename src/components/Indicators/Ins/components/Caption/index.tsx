"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import { 
    Container, 
    CaptionItem, 
} from '@/components/Indicators/Ins/components/Caption/style';
import Icon from '@/components/Icon';

export default function Caption(props: any) {
    return (<>
        <Container className={`flex flex-wrap items-center ${props?.className}`}>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center' status="critical"><span className="flex-1">Crítico - Abaixo de 85%</span></CaptionItem>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center' status="alert"><span className="flex-1">Alerta - 90% à 85%</span></CaptionItem>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center' status="non-critical"><span className="flex-1">Não crítico - Acima de 85%</span></CaptionItem>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center'>
                <Icon data="fa-solid fa-people-group" />
                <span className="flex-1">Coletivas</span>
            </CaptionItem>
        </Container>
    </>);
};