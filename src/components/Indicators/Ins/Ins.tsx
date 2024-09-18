"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import { 
    Caption, 
    CaptionItem, 
    Card, 
    CardInner, 
    Cards, 
    CardHeader, 
    CardContent, 
    CardTitle, 
    CardIns, 
    CardLinePosition, 
    CardSubtitle,
    CardCaption
} from '@/components/Indicators/Ins/style';
import Icon from '@/components/Icon';
import CountUp from 'react-countup';

export default function Ins(props: any) {
    return (<>
        <Caption className='flex xl:justify-end flex-wrap items-center'>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center' status="critical"><span className="flex-1">Crítico - Abaixo de 85%</span></CaptionItem>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center' status="alert"><span className="flex-1">Alerta - 90% à 85%</span></CaptionItem>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center' status="non-critical"><span className="flex-1">Não crítico - Acima de 85%</span></CaptionItem>
            <CaptionItem className='flex w-full lg:w-auto flex-wrap items-center'>
                <Icon data="fa-solid fa-people-group" />
                <span className="flex-1">Coletivas</span>
            </CaptionItem>
        </Caption>
        <Cards className='flex justify-between items-stretch flex-wrap'>
            <Card ins={55} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-people-group" />
                            <Icon data="fa-solid fa-cloud-bolt" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> 
                            <span className='flex items-center'><CountUp end={55} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={94} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
            <Card ins={65} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-bolt" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={65} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={82} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>         
            <Card ins={75} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-people-group" />
                            <Icon data="fa-solid fa-cloud-bolt" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={75} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={73} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>   
            <Card ins={86} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-sun" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={86} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={44} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
            <Card ins={90} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-rain" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={90} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={42} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
            <Card ins={93} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-sun" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={93} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={38} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>            
            <Card ins={55} className='w-3/6 lg:w-2/6 2xl:flex-1'>
                <CardInner className='flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex justify-end items-center'>
                            <Icon data="fa-solid fa-sun" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={55} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={20} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
        </Cards>
    </>);
};