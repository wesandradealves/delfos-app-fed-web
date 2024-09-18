"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import { 
    Container,
    GeralItem,
    GeralTitle,
    GeralItemInner
} from '@/components/Indicators/Ins/components/Geral/style';
import CountUp from 'react-countup';
import Tooltip from '@/components/Tooltip';

export default function Geral(props: any) {
    return (<>
        <Container className={`grid gap-y-6 gap-x-4 grid-cols-1 ${props?.className}`}>
            <GeralItem>
                <GeralItemInner className="flex items-center justify-between">
                    <GeralTitle className='flex items-center justify-between'>
                        INS Geral 
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                        
                    </GeralTitle>
                </GeralItemInner>
            </GeralItem>
            <GeralItem>
                <GeralItemInner className="flex items-center justify-between">
                    <GeralTitle className='flex items-center justify-between'>
                        TMA Geral  
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                          
                    </GeralTitle>
                </GeralItemInner>
            </GeralItem>
            <GeralItem>
                <GeralItemInner className="flex items-center justify-between">
                    <GeralTitle className='flex items-center justify-between'>
                        Volumetria Geral 
                        <Tooltip 
                            position="top"
                            description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
                        />                      
                    </GeralTitle>
                </GeralItemInner>
            </GeralItem>                        
        </Container>
    </>);
};