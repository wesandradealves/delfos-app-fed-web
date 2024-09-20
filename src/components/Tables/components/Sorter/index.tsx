"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import Icon from '@/components/Icon';
import { Sort } from '@/components/Tables/components/Sorter/style';

export default function Sorter(props: any, onSort: any) {
    const [expanded, setExpand] = useState(false); 
    
    useEffect(() => {
        props?.onSort(expanded);
    }, [expanded]);

    return (<Sort onClick={() => {
        setTimeout(function() { 
            setExpand(!expanded)
        });            
    }} className='block'>
        <Icon data={`fa-solid fa-caret-${expanded ? 'up' : 'down'}`} />
    </Sort>);
};