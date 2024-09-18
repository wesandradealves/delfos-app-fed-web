"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';
import { camelCase } from '@/utils';
import { Indicator, Heading, Title, Text, HeadingTop } from '@/components/Indicators/style';
import Tooltip from '../Tooltip';
import Button from '@/components/Button';

export default function Indicators(props: any) {
    return (
        <Indicator className={`${props?.className} gap-y-6 gap-x-6 flex flex-col`}>
            {props?.title && <Heading className='flex flex-col'>
                <HeadingTop className='flex items-center justify-between'>
                    <Title className='flex items-center'>
                        {props?.tooltip && <Tooltip 
                            position="top"
                            description={props?.tooltip} 
                        />}

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
                componentName={camelCase(props?.componentName.replaceAll("_", " "))
                .split(" ")
                .join("")}
            />    
        </Indicator>
    );
};