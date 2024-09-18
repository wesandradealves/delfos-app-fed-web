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
        <Caption className='flex justify-end items-center flex-wrap'>
            <CaptionItem className='flex items-center' status="critical">Crítico - Abaixo de 85%</CaptionItem>
            <CaptionItem className='flex items-center' status="alert">Alerta - 90% à 85%</CaptionItem>
            <CaptionItem className='flex items-center' status="non-critical">Não crítico - Acima de 85%</CaptionItem>
            <CaptionItem className='flex items-center'>
                <Icon data="fa-solid fa-people-group" />
                Coletivas
            </CaptionItem>
        </Caption>
        <Cards className='flex justify-between items-stretch'>
            <Card ins={55} className='flex-1 flex-wrap'>
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
            <Card ins={65} className='flex-1 flex-wrap'>
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
            <Card ins={75} className='flex-1 flex-wrap'>
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
            <Card ins={86} className='flex-1 flex-wrap'>
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
            <Card ins={90} className='flex-1 flex-wrap'>
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
            <Card ins={93} className='flex-1 flex-wrap'>
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
            <Card ins={55} className='flex-1 flex-wrap'>
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