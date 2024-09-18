"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';
import { camelCase } from '@/utils';
import { Indicator, Heading, Title, Text, HeadingTop } from '@/components/Indicators/style';
import Icon from '@/components/Icon';

export default function Indicators(props: any) {
    return (
        <>
            {props?.id && (
                <Indicator className={`${props?.className} flex flex-col`}>
                    {props?.title && <Heading className='flex flex-col'>
                        <HeadingTop className='flex items-center'>
                            <Icon data="fa-solid fa-question" className="flex items-center justify-center text-center" />
                            <Title>{props?.title}</Title>
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