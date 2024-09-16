"use client";
import { Content } from "./style";
import { ButtonProps } from "./typo";

export default function Button({ 
    children, 
    tag = 'button', 
    href, 
    className = '', 
    ...props 
  }: ButtonProps) {
    const Tag = tag as keyof JSX.IntrinsicElements;

    return (
      <Content className="flex">
        <Tag 
          className={`btn ${className}`}
          {...(tag === 'a' && href ? { href } : {})} 
          {...props} // Spread remaining props
        >
          {children}
        </Tag>
      </Content>
    );
}