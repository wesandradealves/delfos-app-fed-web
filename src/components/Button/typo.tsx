export interface ButtonProps {
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements; // Optional, defaults to 'button'
  href?: string; // For 'a' tags
  label?: string; // Optional label
  className?: string; 
  icon?: string; 
  [key: string]: any; // To accept other props
}