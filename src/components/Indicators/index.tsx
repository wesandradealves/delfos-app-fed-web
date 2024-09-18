"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';
import { camelCase } from '@/utils';
import { Indicator, Heading, Title, Text, HeadingTop } from '@/components/Indicators/style';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

export default function Indicators(props: any) {
    return (
        <>
            {props?.id && (
                <Indicator className={`${props?.className} flex flex-col`}>
                    {props?.title && <Heading className='flex flex-col'>
                        <HeadingTop className='flex items-center justify-between'>
                            <Title className='flex items-center'>
                                <Icon data="fa-solid fa-question" className="flex items-center justify-center text-center" />

                                {props?.title}
                            </Title>

                            {props?.openTickets && <Button 
                                tag='a'
                                icon='fa-solid fa-ticket'
                                href='#'
                                className='secondary'>
                                    Abrir ticket
                                </Button>}
                        </HeadingTop>
                        {props?.description && <Text>{props?.description}</Text>}
                    </Heading>}  

                    <DynamicComponent
                        componentName={camelCase(props?.id.replaceAll("_", " "))
                        .split(" ")
                        .join("")}
                    />    
                </Indicator>
            )}        
        </>
    );
};