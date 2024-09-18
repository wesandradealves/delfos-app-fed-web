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
      openTickets={true}
      tooltip="Etiam mattis rutrum justo, eu hendrerit metus semper sit amet. Donec tincidunt porta dolor. Nulla facilisi. Vestibulum convallis elementum convallis. In vel congue arcu, ut bibendum neque. Donec auctor convallis lectus sit amet congue. Donec a eros urna. Fusce vitae interdum risus, vel faucibus magna. Nulla facilisi."
      description="Índice de satisfação do serviço. Abaixo de 85% é um cenário crítico. Informações em tempo real."
      id="ins" className="w-full" />
    </>
  )
}