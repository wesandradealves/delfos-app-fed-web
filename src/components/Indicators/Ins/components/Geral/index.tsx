"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import { 
    Container,
    GeralItem,
    GeralTitle,
    GeralItemInner,
    GeralContent,
    GeralStatus,
    Column,
    GeralSubtitle,
    GeralText
} from '@/components/Indicators/Ins/components/Geral/style';
import CountUp from 'react-countup';
import Tooltip from '@/components/Tooltip';

export default function Geral(props: any) {
    return (<>
        <Container className={`flex flex-wrap items-stretch gap-y-6 gap-x-6 ${props?.className}`}>
            <GeralItem className='w-full flex-auto 2xl:w-fit'>
                <GeralItemInner className="flex gap-y-6 gap-x-6 md:flex-wrap flex-col lg:flex-row lg:items-center justify-between h-full">
                    <GeralTitle className='lg:pe-7 gap-x-3 gap-y-3 flex items-center justify-between'>
                        INS Geral 
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                        
                    </GeralTitle>
                    <GeralContent className='flex gap-y-3.5 gap-x-3.5 lg:justify-end items-center'>
                        <GeralStatus />
                        <GeralText><CountUp end={99} />%</GeralText>
                    </GeralContent>
                </GeralItemInner>
            </GeralItem>
            <GeralItem className='w-full flex-auto 2xl:w-fit'>
                <GeralItemInner className="flex gap-y-6 gap-x-6 md:flex-wrap flex-col lg:flex-row lg:items-center justify-between h-full">
                    <GeralTitle className='lg:pe-7 gap-x-3 gap-y-3 flex items-center justify-between'>
                        TMA Geral  
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                          
                    </GeralTitle>
                    <GeralContent className='flex gap-y-7 gap-x-14 items-stretch lg:justify-end flex-1 flex-col sm:flex-row'>
                        <Column className='flex flex-col justify-center '>
                            <GeralText className='flex gap-y-3.5 gap-x-3.5 items-center '>
                                <GeralStatus status="critical" />
                                <CountUp end={3} />
                            </GeralText>
                            <GeralSubtitle>Crítico</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center '>
                            <GeralText className='flex gap-y-3.5 gap-x-3.5 items-center '>
                                <GeralStatus status="alert" />
                                <CountUp end={2} />
                            </GeralText>
                            <GeralSubtitle>Alerta</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center '>
                            <GeralText className='flex gap-y-3.5 gap-x-3.5 items-center '>
                                <GeralStatus status="non-critical" />
                                <CountUp end={2} />
                            </GeralText>
                            <GeralSubtitle>Não crítico</GeralSubtitle>
                        </Column>                        
                    </GeralContent>                    
                </GeralItemInner>
            </GeralItem>
            <GeralItem className='w-full flex-auto 2xl:w-fit'>
                <GeralItemInner className="flex gap-y-6 gap-x-6 md:flex-wrap flex-col lg:flex-row lg:items-center justify-between h-full">
                    <GeralTitle className='lg:pe-7 gap-x-3 gap-y-3 flex items-center justify-between'>
                        Volumetria Geral 
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                      
                    </GeralTitle>
                    <GeralContent className='flex gap-y-7 gap-x-14 items-stretch lg:justify-end flex-1 flex-col sm:flex-row'>
                        <Column className='flex flex-col justify-center '>
                            <GeralText className='flex gap-y-3.5 gap-x-3.5 items-center '>
                                <CountUp end={6548} />
                            </GeralText>
                            <GeralSubtitle>Previsto</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center '>
                            <GeralText className='flex gap-y-3.5 gap-x-3.5 items-center '>
                                <GeralStatus />
                                <CountUp end={2789} />
                            </GeralText>
                            <GeralSubtitle>Real</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center '>
                            <GeralText className='flex gap-y-3.5 gap-x-3.5 items-center '>
                                <GeralStatus />
                                <CountUp end={60} />%
                            </GeralText>
                            <GeralSubtitle>Status</GeralSubtitle>
                        </Column>                        
                    </GeralContent>                           
                </GeralItemInner>
            </GeralItem>                        
        </Container>
    </>);
};