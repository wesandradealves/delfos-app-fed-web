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
                <GeralItemInner className="flex items-center justify-between h-full">
                    <GeralTitle className='pe-7 flex items-center justify-between'>
                        INS Geral 
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                        
                    </GeralTitle>
                    <GeralContent className='flex justify-end items-center'>
                        <GeralStatus />
                        <GeralText><CountUp end={99} />%</GeralText>
                    </GeralContent>
                </GeralItemInner>
            </GeralItem>
            <GeralItem className='w-full flex-auto 2xl:w-fit'>
                <GeralItemInner className="flex items-center justify-between h-full">
                    <GeralTitle className='pe-7 flex items-center justify-between'>
                        TMA Geral  
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                          
                    </GeralTitle>
                    <GeralContent className='flex items-stretch justify-end space-y-14 md:space-y-0 md:space-x-6 2xl:space-x-14 flex-1 flex-col md:flex-row'>
                        <Column className='flex flex-col justify-center text-end md:text-start'>
                            <GeralText className='flex items-center justify-end text-end md:justify-start md:text-start'>
                                <GeralStatus status="critical" />
                                <Column><CountUp end={3} /></Column>
                            </GeralText>
                            <GeralSubtitle>Crítico</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center text-end md:text-start'>
                            <GeralText className='flex items-center justify-end text-end md:justify-start md:text-start'>
                                <GeralStatus status="alert" />
                                <Column><CountUp end={2} /></Column>
                            </GeralText>
                            <GeralSubtitle>Alerta</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center text-end md:text-start'>
                            <GeralText className='flex items-center justify-end text-end md:justify-start md:text-start'>
                                <GeralStatus status="non-critical" />
                                <Column><CountUp end={2} /></Column>
                            </GeralText>
                            <GeralSubtitle>Não crítico</GeralSubtitle>
                        </Column>                        
                    </GeralContent>                    
                </GeralItemInner>
            </GeralItem>
            <GeralItem className='w-full flex-auto 2xl:w-fit'>
                <GeralItemInner className="flex items-center justify-between h-full">
                    <GeralTitle className='pe-7 flex items-center justify-between'>
                        Volumetria Geral 
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                      
                    </GeralTitle>
                    <GeralContent className='flex items-stretch justify-end space-y-14 md:space-y-0 md:space-x-6 2xl:space-x-14 flex-1 flex-col md:flex-row'>
                        <Column className='flex flex-col justify-center text-end md:text-start'>
                            <GeralText className='flex items-center justify-end text-end md:justify-start md:text-start'>
                                <Column><CountUp end={6548} /></Column>
                            </GeralText>
                            <GeralSubtitle>Previsto</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center text-end md:text-start'>
                            <GeralText className='flex items-center justify-end text-end md:justify-start md:text-start'>
                                <GeralStatus />
                                <Column><CountUp end={2789} /></Column>
                            </GeralText>
                            <GeralSubtitle>Real</GeralSubtitle>
                        </Column>
                        <Column className='flex flex-col justify-center text-end md:text-start'>
                            <GeralText className='flex items-center justify-end text-end md:justify-start md:text-start'>
                                <GeralStatus />
                                <Column><CountUp end={60} />%</Column>
                            </GeralText>
                            <GeralSubtitle>Status</GeralSubtitle>
                        </Column>                        
                    </GeralContent>                           
                </GeralItemInner>
            </GeralItem>                        
        </Container>
    </>);
};