"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import Cards from '@/components/Indicators/Ins/components/Cards';
import Geral from '@/components/Indicators/Ins/components/Geral';
import Caption from '@/components/Indicators/Ins/components/Caption';
import Collapse from '@/components/Collapse';
import Tables from '@/components/Tables';

export default function Ins(props: any) {
    const data = [
        {
          "Volumetria": "Crítico",
          "Local": "GO",
          "INS": "89",
          "Pessoas na Fila": "1",
          "Coletivas": "Não Crítico",
          "TMA": "175",
          "TME": "7",
          "IAB ANNEEL": "0.3",
          "CHA": "100.0",
          "Alerta": "green",
          "Nivel Criticidade": "0",
          "Duracao do cenario": "0",
          "Previsto dia": "2589",
          "Distribuidora": "GO",
          "QTI": "3830",
          "UF": "GO"
        },
        {
          "Volumetria": "Crítico",
          "Local": "MA",
          "INS": "87",
          "Pessoas na Fila": "0",
          "Coletivas": "Não Crítico",
          "TMA": "184",
          "TME": "12",
          "IAB ANNEEL": "2.0",
          "CHA": "99.0",
          "Alerta": "green",
          "Nivel Criticidade": "0",
          "Duracao do cenario": "0",
          "Previsto dia": "1762",
          "Distribuidora": "MA",
          "QTI": "2181",
          "UF": "MA"
        },
        {
          "Volumetria": "Crítico",
          "Local": "PA",
          "INS": "97",
          "Pessoas na Fila": "0",
          "Coletivas": "Não Crítico",
          "TMA": "208",
          "TME": "4",
          "IAB ANNEEL": "0.6",
          "CHA": "99.0",
          "Alerta": "green",
          "Nivel Criticidade": "0",
          "Duracao do cenario": "0",
          "Previsto dia": "2567",
          "Distribuidora": "PA",
          "QTI": "2702",
          "UF": "PA"
        },
        {
          "Volumetria": "Crítico",
          "Local": "PI",
          "INS": "98",
          "Pessoas na Fila": "0",
          "Coletivas": "Não Crítico",
          "TMA": "184",
          "TME": "4",
          "IAB ANNEEL": "0.3",
          "CHA": "100.0",
          "Alerta": "green",
          "Nivel Criticidade": "0",
          "Duracao do cenario": "0",
          "Previsto dia": "1054",
          "Distribuidora": "PI",
          "QTI": "1810",
          "UF": "PI"
        },
        {
          "Volumetria": "Crítico",
          "Local": "AL",
          "INS": "70",
          "Pessoas na Fila": "1",
          "Coletivas": "Não Crítico",
          "TMA": "210",
          "TME": "41",
          "IAB ANNEEL": "8.1",
          "CHA": "92.0",
          "Alerta": "yellow",
          "Nivel Criticidade": "1",
          "Duracao do cenario": null,
          "Previsto dia": "1068",
          "Distribuidora": "AL",
          "QTI": "1357",
          "UF": "AL"
        },
        {
          "Volumetria": "Não Crítico",
          "Local": "AP",
          "INS": "100",
          "Pessoas na Fila": "0",
          "Coletivas": "Não Crítico",
          "TMA": "199",
          "TME": "3",
          "IAB ANNEEL": "0.7",
          "CHA": "99.0",
          "Alerta": "green",
          "Nivel Criticidade": "0",
          "Duracao do cenario": "0",
          "Previsto dia": "309",
          "Distribuidora": "AP",
          "QTI": "173",
          "UF": "AP"
        },
        {
          "Volumetria": "Crítico",
          "Local": "RS",
          "INS": "95",
          "Pessoas na Fila": "2",
          "Coletivas": "Não Crítico",
          "TMA": "213",
          "TME": "4",
          "IAB ANNEEL": "0.4",
          "CHA": "100.0",
          "Alerta": "green",
          "Nivel Criticidade": "0",
          "Duracao do cenario": "0",
          "Previsto dia": "1906",
          "Distribuidora": "RS",
          "QTI": "2274",
          "UF": "RS"
        }
    ];

    return (<>
        <Caption className='xl:justify-end'/>

        <Cards className='sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7' />
        <Geral />

        <Collapse title="Influenciadores da fila INS" tooltip="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi.">
            <Tables data={data.map(function(item: any) {
                Object.keys(item).map(function(key: any) {
                    if(!item[key]) item[key] = '--'
                })
                
                return item;
            })} />
        </Collapse>
    </>);
};