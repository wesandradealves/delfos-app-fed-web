"use client";

import React, { useState, useEffect, ReactElement } from 'react';

export default function DynamicComponent(props: any) {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  const importComponent = async () => {
    const module = await import(`@/components/Indicators/${props?.componentName}/${props?.componentName}`);
    const DynamicComponent = module.default;
    setImportedComponent(
      <DynamicComponent 
      id={props?.componentName} 
      title={props?.title}
      description={props?.description}
      className={props?.className} />);
  };  

  useEffect(() => {
    importComponent();
  }, []);

  return (importedComponent && <>{importedComponent}</>);
};