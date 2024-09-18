"use client";
import Module from "@/components/Module";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { fetchData } from "@/utils";

export default function Page(props: any) {
  const [data, setData] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    let slug = pathname?.split("/").at(-1);

    if(!data) {
      fetchData('/data/data.json').then(response => {
        if(response && slug) {
          slug = slug?.replace("-", "_");
          setData(response[slug])
        }
      }).catch(error => console.error(error));      
    }
  }, [data, pathname]);

  return (
    <>
      {data && (<Module data={data} />)}    
    </>
  )
}