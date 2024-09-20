"use client";

import React, { useState, useEffect, ReactElement, Suspense } from 'react';

export default function DynamicComponent(props: any) {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  const importComponent = async () => {
    const component = await import(`@/components/Indicators/${props?.componentName}`);
    const DynamicComponent = component.default;
    setImportedComponent(
      <DynamicComponent 
        id={props?.componentName} 
        title={props?.title}
        openTickets={props?.openTickets}
        description={props?.description}
        className={props?.className} />
    );
  };  

  useEffect(() => {
    importComponent();
  });

  return (importedComponent && <Suspense fallback={<div>Loading...</div>}>{importedComponent}</Suspense>);
};