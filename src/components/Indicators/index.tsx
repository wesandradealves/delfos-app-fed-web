"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';
import { camelCase } from '@/utils';

export default function Indicators(props: any) {
    return (
        <>
            {
                props?.id && <DynamicComponent
                    className={props?.className}
                    componentName={camelCase(props?.id.replaceAll("_", " "))
                    .split(" ")
                    .join("")}
                />    
            }        
        </>
    );
};