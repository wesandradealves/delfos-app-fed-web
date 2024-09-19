import PageHeader from "@/components/PageHeader";
import { Container, Content } from "@/components/Module/style";
import Indicators from "@/components/Indicators";

export default function Module(props: any) {
  return (
    <Container data-component="Module" className="w-full gap-x-4 gap-y-4 flex flex-col">
      <PageHeader icon={props?.data?.icon}>{props?.data?.label}</PageHeader>  

      {props?.data?.indicators && (
        <Content className="flex-1 flex items-stretch flex-wrap">
          {props?.data?.indicators.map((component: any, index: number) => (
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
        </Content>
      )}      
    </Container>
  );
}
