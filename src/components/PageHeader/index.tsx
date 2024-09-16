"use client";
import { Content, Icon, Title } from "@/components/PageHeader/style";
import { PageHeaderProps } from "@/components/PageHeader/typo";

export default function PageHeader({ 
    children, 
    className = '', 
    ...props 
  }: PageHeaderProps) {
    return (
      <Content className={`${props?.className} page-header flex items-center`} data-component="PageHeader">
        {props?.icon && (
          props?.icon.indexOf('svg') > 0 ? <Icon dangerouslySetInnerHTML={{ __html: props?.icon }} className="icon" /> : <Icon className={props?.icon} />
        )}

        <Title>{children}</Title>
      </Content>
    );
}