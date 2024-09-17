import Indicators from "@/components/Indicators";
import PageHeader from "@/components/PageHeader";

export default function CallCenter() {
  return (
    <>
      <PageHeader icon='fa-solid fa-headset'>
        Call Center
      </PageHeader>  
      
      <Indicators 
      title="Fila INS"
      description="Índice de satisfação do serviço. Abaixo de 85% é um cenário crítico. Informações em tempo real."
      id="ins" className="w-full" />
    </>
  )
}