"use client";
import { Content, Title, Collapser } from "@/components/Collapse/style";
import { CollapseProps } from "@/components/Collapse/typo";
import Tooltip from "@/components/Tooltip";
import Icon from "@/components/Icon";
import { useState } from "react";

export default function Collapse({ 
  children, 
  className = '', 
  icon,
  title,
  tooltip,
  ...props 
}: CollapseProps) {
  const [expanded, setExpand] = useState(false); // No need for `any` type here.

  return (
    <Content data-component="Collapse" className={`${className} flex gap-y-6 flex-col`}>
      <Title className='flex gap-y-3 gap-x-3 items-center'>
        {tooltip && <Tooltip position="top" description={tooltip} />}

        {title}

        <Collapser onClick={() => {
            setTimeout(function() { 
                setExpand(!expanded)
            });            
        }}>
          <Icon data={`fa-solid fa-angle-${expanded ? 'down' : 'up'}`} />
        </Collapser>
      </Title>

      {expanded && <>{children}</>}  
    </Content>
  );
}