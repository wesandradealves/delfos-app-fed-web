import PageHeader from "@/components/PageHeader";
import { Container } from "@/components/Module/style";
import Indicators from "@/components/Indicators";

export default function Module(props: any) {
  return (
    <Container data-component="Module" className="w-full flex flex-col">
      <PageHeader icon={props?.data?.icon}>{props?.data?.title}</PageHeader>  

      {props?.data?.modules && (
        <>
          {props?.data?.modules.map((component: any, index: number) => (
            <Indicators 
              key={component.id || index}  
              componentName={component.componentName}
              title={component.title}
              openTickets={component.openTickets}
              tooltip={component.tooltip}
              description={component.description}
              className={component.className} 
            />  
          ))}
        </>
      )}      
    </Container>
  );
}
