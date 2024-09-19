"use client";
import { Content, Title } from "@/components/Collapse/style";
import { CollapseProps } from "@/components/Collapse/typo";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";

export default function Collapse({ 
    children, 
    className = '', 
    icon,
    title,
    tooltip,
    ...props 
  }: CollapseProps) {
    return (<Content data-component="Collapse" className={`${className} flex gap-y-6 flex-col`}>
        <Title className='flex gap-y-3 gap-x-3 items-center'>
            {tooltip && <Tooltip 
                position="top"
                description={tooltip} 
            />}

            {title}

            <Icon data="fa-solid fa-angle-down" />
        </Title>
        <>{children}</>
    </Content>);
}