"use client";
import { Content } from "@/components/Button/style";
import { ButtonProps } from "@/components/Button/typo";
import Icon from '@/components/Icon';

export default function Button({ 
    children, 
    tag = 'button', 
    href, 
    icon,
    className = '', 
    ...props 
  }: ButtonProps) {
    const Tag = tag as keyof JSX.IntrinsicElements;

    return (
      <Content className="flex">
        <Tag 
          data-component="Button"
          className={`btn flex items-center text-center justify-center ${className}`}
          {...(tag === 'a' && href ? { href } : {})} 
          {...props} // Spread remaining props
        >
          {icon && (<Icon data={icon} />)}
          {children}
        </Tag>
      </Content>
    );
}