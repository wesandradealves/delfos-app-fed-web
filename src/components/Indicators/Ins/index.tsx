"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import Cards from '@/components/Indicators/Ins/components/Cards';
import Geral from '@/components/Indicators/Ins/components/Geral';
import Caption from '@/components/Indicators/Ins/components/Caption';

export default function Ins(props: any) {
    return (<>
        <Caption className='xl:justify-end'/>
        <Cards className='sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7' />
        <Geral />
    </>);
};