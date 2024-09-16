"use client";

import React, { useState, useEffect, ReactElement } from 'react';
import { Indicator } from '../style';

export default function Ins(props: any) {
    return (
        <Indicator          
        id={props?.id}        
        className={props?.className}>
            
        </Indicator>
    );
};