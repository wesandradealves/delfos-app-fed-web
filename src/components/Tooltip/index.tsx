"use client";
import Icon from "@/components/Icon";
import { Content, Text } from "@/components/Tooltip/style";

export default function Tooltip(props: any) {  
  return (
    <Content data-component="ToolTip" className={`tooltip flex items-center ${props?.className}`}>
      <Icon data="fa-solid fa-question" className="flex items-center justify-center text-center" />
      {props?.description && <Text position={props?.position} className="flex-1 hidden">
        {props?.description}
      </Text>}
    </Content>
  );
};