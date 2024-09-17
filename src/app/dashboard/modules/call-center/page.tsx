import Indicators from "@/components/Indicators";
import PageHeader from "@/components/PageHeader";

export default function CallCenter() {
  return (
    <>
      <PageHeader icon='
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7060_23597)">
          <path d="M8.70703 9.375L8.75 14.1875C8.75 14.9609 8.10547 15.5625 7.375 15.5625H6.6875C5.14062 15.5625 3.9375 14.3594 3.9375 12.8125V10.793C3.9375 9.24609 5.14062 8 6.6875 8H7.33203C8.0625 8 8.70703 8.64453 8.70703 9.375ZM11.5 -0.25C17.6445 -0.25 22.2852 4.90625 22.5 10.75V16.9375C22.5 19.043 20.7812 20.7188 18.7188 20.7188H13.9492C13.6055 21.3633 12.918 21.75 12.1875 21.75H10.7695C9.52344 21.75 8.53516 20.6328 8.75 19.3008C8.96484 18.3125 9.86719 17.625 10.8555 17.625H12.1875C12.918 17.625 13.6055 18.0547 13.9492 18.6562H18.7188C19.6641 18.6562 20.4375 17.9258 20.4375 16.9375V10.75C20.4375 5.85156 16.3984 1.85547 11.5 1.85547C6.55859 1.85547 2.5625 5.85156 2.5625 10.75V12.4688C2.5625 13.0703 2.00391 13.5 1.48828 13.5C0.929688 13.5 0.5 13.0703 0.5 12.4688V10.75C0.671875 4.90625 5.3125 -0.25 11.5 -0.25ZM16.3125 15.5625H15.625C14.8516 15.5625 14.25 14.9609 14.25 14.1875V9.41797C14.25 8.64453 14.8516 8 15.625 8H16.3125C17.8164 8 19.0625 9.24609 19.0625 10.793V12.8125C19.0625 14.3594 17.8164 15.5625 16.3125 15.5625Z" fill="#EBCF59"/>
          </g>
          <defs>
          <clipPath id="clip0_7060_23597">
          <rect width="22" height="22" fill="white" transform="translate(0.5)"/>
          </clipPath>
          </defs>
        </svg>
      '>
        Call Center
      </PageHeader>  
      
      <Indicators 
      title="Fila INS"
      description="Índice de satisfação do serviço. Abaixo de 85% é um cenário crítico. Informações em tempo real."
      id="ins" className="w-full" />
    </>
  )
}