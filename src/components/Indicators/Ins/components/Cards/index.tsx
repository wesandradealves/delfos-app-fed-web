"use client";

import React, 
{ useState, useEffect, ReactElement } from 'react';
import { 
    Container,
    Card, 
    CardInner, 
    CardHeader, 
    CardContent, 
    CardTitle, 
    CardIns, 
    CardLinePosition, 
    CardSubtitle,
    CardCaption
} from '@/components/Indicators/Ins/components/Cards/style';
import Icon from '@/components/Icon';
import CountUp from 'react-countup';

export default function Cards(props: any) {
    return (<>
        <Container className={`place-items-stretch justify-between items-stretch flex-wrap gap-y-6 gap-x-6 grid grid-cols-1 ${props?.className}`}>
            <Card ins={55}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-people-group" />
                            <Icon data="fa-solid fa-cloud-bolt" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> 
                            <span className='flex items-center'><CountUp end={55} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={94} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
            <Card ins={65}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-bolt" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={65} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={82} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>         
            <Card ins={75}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-people-group" />
                            <Icon data="fa-solid fa-cloud-bolt" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={75} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={73} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>   
            <Card ins={86}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-sun" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={86} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={44} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
            <Card ins={90}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-rain" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={90} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={42} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
            <Card ins={93}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-cloud-sun" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={93} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={38} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>            
            <Card ins={55}>
                <CardInner className='h-full gap-y-7 gap-x-7 flex flex-col'>
                    <CardHeader className='flex items-center justify-between'>
                        <CardTitle>Pará</CardTitle>
                        <CardCaption className='flex gap-y-7 gap-x-7 justify-end items-center'>
                            <Icon data="fa-solid fa-sun" />
                        </CardCaption>
                    </CardHeader>
                    <CardContent className='flex justify-between'>
                        <CardIns className='flex gap-y-0 gap-x-0 flex-col'>
                            <CardSubtitle>INS</CardSubtitle> <span className='flex items-center'><CountUp end={55} />%</span>
                        </CardIns>
                        <CardLinePosition className='flex gap-y-2 gap-x-2 flex-col'>
                            <CardSubtitle>Fila</CardSubtitle> <span className='flex items-center'><CountUp end={20} /></span>
                        </CardLinePosition>
                    </CardContent>
                </CardInner>
            </Card>
        </Container>
    </>);
};