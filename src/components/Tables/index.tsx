"use client";

import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Row, Col, Text } from "@/components/Tables/style";
import Tooltip from "@/components/Tooltip";
import Sorter from "@/components/Tables/components/Sorter";

export default function Tables(props: any) { 
  const [data, setData] = useState(props?.data);  
  const [first] = props?.data;
  
  let shownKeys = [
    "Distribuidora",
    "IAB ANNEEL",
    "CHA",
    "Duracao do cenario",
    "TMA",
    "TME",
    "Previsto dia"
  ];

  const keys = Object.keys(first).filter((key) => key !== 'Alerta' && shownKeys.includes(key));

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  const handleSort = (bool:any, key:any) => {
    setData(props?.data.sort((a:any, b:any) => bool ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]) ));
  }  

  const handleSuffix = (key:any) => {
    switch (key) {
      case 'CHA':
      case 'IAB ANNEEL':
        return '%';
        break;
      case 'Duracao do cenario':
      case 'TMA':
      case 'TME':
        return 's';
        break;
      default:
        return '';
        break;
    }
  }  

  return (<>
    {data && <Table className="flex flex-col">
      <Thead className="flex w-full flex-wrap gap-y-3 gap-x-3">
        {keys.map((key: any, index: any) => (
          <Col className="flex-1 flex items-center gap-y-3 gap-x-3" key={key || index}>
            <Tooltip 
              className="hidden 2xl:block"
              position="top"
              description="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi." 
            />               
            <Text className="overflow-hidden">{key}</Text>
            <Sorter data={key} onSort={(e: any) => handleSort(e, key)} />
          </Col>
        ))}
      </Thead>
      <Tbody className="flex w-full flex-col gap-y-3 gap-x-3">
        {data.map((item: any, index: any) => (
          <Row key={item?.Local} className="flex w-full gap-y-3 gap-x-3 flex-wrap">
            {keys.map((key: any, index: any) => (
              <Col className="flex-1 overflow-hidden" key={key || index}>
                <Text>{item[key] && item[key] !== '--' ? `${item[key]}${handleSuffix(key)}` : item[key]}</Text>
              </Col>
            ))}                
          </Row>
        ))}
      </Tbody>
    </Table>}  
  </>);
};