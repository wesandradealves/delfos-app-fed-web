"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';
import { camelCase } from '@/utils';
import { Indicator, Heading, Title, Text, HeadingTop } from '@/components/Indicators/style';
import Tooltip from '../Tooltip';
import Button from '@/components/Button';

export default function Indicators(props: any) {
    return (
        <Indicator data-component={props?.componentName} className={`${props?.className} gap-y-6 gap-x-6 flex flex-col`}>
            {props?.title && <Heading className='flex gap-y-3 gap-x-3 flex-col'>
                <HeadingTop className='flex gap-y-3 gap-x-3 items-center justify-between'>
                    <Title className='flex gap-y-3 gap-x-3 items-center'>
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