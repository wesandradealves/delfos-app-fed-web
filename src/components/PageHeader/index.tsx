"use client";
import { Content, Title } from "@/components/PageHeader/style";
import { PageHeaderProps } from "@/components/PageHeader/typo";
import Icon from "@/components/Icon";

export default function PageHeader({ 
    children, 
    className = '', 
    icon,
    ...props 
  }: PageHeaderProps) {
    return (
      <Content className={`page-header flex items-center w-full flex-wrap`} data-component="PageHeader">
        {icon && (<Icon data={icon} />)}
        <Title>{children}</Title>
      </Content>
    );
}