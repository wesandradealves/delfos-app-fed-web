"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import { Indicator } from '@/components/Indicators/style';

export default function Ins(props: any) {
    return (
        <Indicator          
        id={props?.id}        
        className={props?.className}>
            
        </Indicator>
    );
};