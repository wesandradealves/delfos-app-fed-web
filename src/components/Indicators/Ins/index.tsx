"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import Cards from '@/components/Indicators/Ins/components/Cards';
import Geral from '@/components/Indicators/Ins/components/Geral';
import Caption from '@/components/Indicators/Ins/components/Caption';
import Collapse from '@/components/Collapse';

export default function Ins(props: any) {
    return (<>
        <Caption className='xl:justify-end'/>
        <Cards className='sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7' />
        <Geral />
        <Collapse title="Influenciadores da fila INS" tooltip="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi.">
            teste
        </Collapse>
    </>);
};