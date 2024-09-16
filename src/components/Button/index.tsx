"use client";
import { Content } from "@/components/Button/style";
import { ButtonProps } from "@/components/Button/typo";

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
          data-component="Button"
          className={`btn ${className}`}
          {...(tag === 'a' && href ? { href } : {})} 
          {...props} // Spread remaining props
        >
          {children}
        </Tag>
      </Content>
    );
}