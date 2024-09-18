"use client";
import { Content } from "@/components/Icon/style";

export default function Icon(props: any) {  
  return (
    <>
        {props?.data && (
            props?.data.indexOf('svg') > 0 ? (
                <Content dangerouslySetInnerHTML={{ __html: props?.data }} className={`${props?.className} icon`} />
            ) : (
                <Content className={`${props?.data} ${props?.className} icon`} />
            )
        )}
    </>
  );
};