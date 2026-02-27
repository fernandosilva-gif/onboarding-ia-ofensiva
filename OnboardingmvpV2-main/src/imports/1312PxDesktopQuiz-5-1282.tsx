import svgPaths from "./svg-fawd3kbtzx";
import { imgCheck } from "./svg-nsqeo";

function Load() {
  return <div className="bg-[#d4d4d4] h-[2px] shrink-0 w-[48px]" data-name="load" />;
}

function Frame1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[24px] top-[calc(50%+0.5px)]">
      <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center justify-center right-0 top-0 w-[104px]" data-name="loadbar">
        <div className="bg-[#303030] content-stretch flex flex-col items-start overflow-clip relative rounded-[999px] shrink-0 w-[64px]" data-name="loadbar">
          <Load />
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[12px]">100%</p>
        </div>
      </div>
    </div>
  );
}

function ArrowBackIosNew() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_back_ios_new">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow_back_ios_new">
          <mask height="16" id="mask0_4_439" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_4_439)">
            <path d={svgPaths.pb481300} fill="var(--fill-0, #A4A4A4)" id="arrow_back_ios_new_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavbarQuiz() {
  return (
    <div className="bg-black content-stretch flex h-[64px] items-center overflow-clip relative shrink-0 w-[1312px]" data-name="Navbar_quiz">
      <Frame1 />
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[20px] px-[4px] py-[2px] top-1/2" data-name="_buttonback">
        <ArrowBackIosNew />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[16px] whitespace-nowrap">
          <p className="leading-[16px]">Voltar</p>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav_Bar">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav_Bar">
        <NavbarQuiz />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[104px]" data-name="Logotipo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 14">
            <g id="Overlens">
              <path d={svgPaths.p127df00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p354934f0} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.pa1df000} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p7bc7d40} fill="var(--fill-0, white)" />
              <path d={svgPaths.pb4ba600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p100e0100} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p2a98f100} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p10d9c600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p8ab9600} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p2761f300} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.23%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.8932">
        <g id="Group">
          <path d={svgPaths.p20184900} fill="var(--fill-0, #5E5E5E)" id="Vector" />
          <path d={svgPaths.p38767f80} fill="var(--fill-0, #A4A4A4)" id="Vector_2" />
          <path d={svgPaths.p8cf5d80} fill="var(--fill-0, #A4A4A4)" id="Vector_3" />
          <path d={svgPaths.p337ed000} fill="var(--fill-0, #A4A4A4)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p2d6e4880} fill="var(--fill-0, #5E5E5E)" id="Vector_5" />
            <path d={svgPaths.p19d65800} fill="var(--fill-0, #5E5E5E)" id="Vector_6" />
          </g>
          <path d={svgPaths.pd4cc200} fill="var(--fill-0, #5E5E5E)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Calendario() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="calendario 1">
      <Group />
    </div>
  );
}

function CardIcon() {
  return (
    <div className="bg-[#303030] relative rounded-[749.25px] shrink-0 size-[60px]" data-name="Card Icon">
      <div aria-hidden="true" className="absolute border-[#484848] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[749.25px]" />
      <Calendario />
    </div>
  );
}

function CardLabelBackground() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Card Label Background">
      <div className="col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center ml-0 mt-0 not-italic relative row-1 text-[#a4a4a4] text-[9px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">domingo</p>
      </div>
    </div>
  );
}

function CardLabelContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Card Label Container">
      <CardLabelBackground />
    </div>
  );
}

function CardIconContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[81px]" data-name="Card Icon Container">
      <CardIcon />
      <CardLabelContainer />
    </div>
  );
}

function SimpleCardMember() {
  return (
    <div className="bg-[#202020] content-stretch flex h-[137.25px] items-center justify-center p-[6px] relative rounded-[3px] shrink-0 w-[113.25px]" data-name="Simple Card Member">
      <CardIconContainer />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0.22%_0_0.23%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 31.8568">
        <g id="Group">
          <path d={svgPaths.p27c99f00} fill="var(--fill-0, #5E5E5E)" id="Vector" />
          <path d={svgPaths.p183ce600} fill="var(--fill-0, #A4A4A4)" id="Vector_2" />
          <path d={svgPaths.p24605ff0} fill="var(--fill-0, #A4A4A4)" id="Vector_3" />
          <path d={svgPaths.pab1cb00} fill="var(--fill-0, #A4A4A4)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p14aca580} fill="var(--fill-0, #5E5E5E)" id="Vector_5" />
            <path d={svgPaths.p2d8ffc00} fill="var(--fill-0, #5E5E5E)" id="Vector_6" />
          </g>
          <path d={svgPaths.p15f07840} fill="var(--fill-0, #5E5E5E)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Calendario1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="calendario 1">
      <Group1 />
    </div>
  );
}

function CardIcon1() {
  return (
    <div className="bg-[#303030] relative rounded-[999px] shrink-0 size-[80px]" data-name="Card Icon">
      <div aria-hidden="true" className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Calendario1 />
      <div className="-translate-x-1/2 absolute bg-[#484848] border border-[#5e5e5e] border-solid bottom-[-8px] left-1/2 rounded-[999px] size-[16px]" data-name="Icon/check">
        <div className="absolute inset-[calc(25.57%-0.49px)_calc(16.87%-0.66px)_calc(25.62%-0.49px)_calc(16.87%-0.66px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
            <path d={svgPaths.pb0c6980} fill="var(--fill-0, #D4D4D4)" id="check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardLabelBackground1() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-center uppercase whitespace-nowrap" data-name="Card Label Background">
      <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1 text-[#d4d4d4] text-[12px]">
        <p className="leading-[1.3]">Segunda-feira</p>
      </div>
      <div className="col-1 flex flex-col justify-center ml-[10px] mt-[15px] relative row-1 text-[#a4a4a4] text-[8px]">
        <p className="leading-[1.3]">missão completa</p>
      </div>
    </div>
  );
}

function CardLabelContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Card Label Container">
      <CardLabelBackground1 />
    </div>
  );
}

function CardIconContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[108px]" data-name="Card Icon Container">
      <CardIcon1 />
      <CardLabelContainer1 />
    </div>
  );
}

function SimpleCardMember1() {
  return (
    <div className="bg-[#202020] content-stretch flex h-[183px] items-center justify-center p-[8px] relative rounded-[2px] shrink-0 w-[151px]" data-name="Simple Card Member">
      <CardIconContainer1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0.23%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.8932">
        <g id="Group">
          <path d={svgPaths.p20184900} fill="var(--fill-0, #5E5E5E)" id="Vector" />
          <path d={svgPaths.p38767f80} fill="var(--fill-0, #A4A4A4)" id="Vector_2" />
          <path d={svgPaths.p8cf5d80} fill="var(--fill-0, #A4A4A4)" id="Vector_3" />
          <path d={svgPaths.p337ed000} fill="var(--fill-0, #A4A4A4)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p2d6e4880} fill="var(--fill-0, #5E5E5E)" id="Vector_5" />
            <path d={svgPaths.p19d65800} fill="var(--fill-0, #5E5E5E)" id="Vector_6" />
          </g>
          <path d={svgPaths.pd4cc200} fill="var(--fill-0, #5E5E5E)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Calendario2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="calendario 1">
      <Group2 />
    </div>
  );
}

function CardIcon2() {
  return (
    <div className="bg-[#303030] relative rounded-[749.25px] shrink-0 size-[60px]" data-name="Card Icon">
      <div aria-hidden="true" className="absolute border-[#484848] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[749.25px]" />
      <Calendario2 />
    </div>
  );
}

function CardLabelBackground2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Card Label Background">
      <div className="col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center ml-0 mt-0 not-italic relative row-1 text-[#a4a4a4] text-[9px] text-center uppercase whitespace-nowrap">
        <p className="leading-[1.3]">terça-feira</p>
      </div>
    </div>
  );
}

function CardLabelContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Card Label Container">
      <CardLabelBackground2 />
    </div>
  );
}

function CardIconContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[81px]" data-name="Card Icon Container">
      <CardIcon2 />
      <CardLabelContainer2 />
    </div>
  );
}

function SimpleCardMember2() {
  return (
    <div className="bg-[#202020] content-stretch flex h-[137.25px] items-center justify-center p-[6px] relative rounded-[3px] shrink-0 w-[113.25px]" data-name="Simple Card Member">
      <CardIconContainer2 />
    </div>
  );
}

function Shadow() {
  return <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[7.857%] from-[rgba(16,16,16,0)] h-[183px] right-[-1.25px] to-black top-1/2 w-[144px]" data-name="Shadow" />;
}

function Shadow1() {
  return <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[7.857%] from-[rgba(16,16,16,0)] h-[183px] right-[-9.25px] to-black top-1/2 w-[130px]" data-name="Shadow" />;
}

function Shadow2() {
  return <div className="bg-gradient-to-r from-[7.857%] from-[rgba(16,16,16,0)] h-[183px] to-black w-[137px]" data-name="Shadow" />;
}

function Shadow3() {
  return <div className="bg-gradient-to-r from-[7.857%] from-[rgba(16,16,16,0)] h-[183px] to-black w-[127px]" data-name="Shadow" />;
}

function CardHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Card Header">
      <SimpleCardMember />
      <SimpleCardMember1 />
      <SimpleCardMember2 />
      <Shadow />
      <Shadow1 />
      <div className="-translate-y-1/2 absolute flex h-[183px] items-center justify-center left-[0.75px] top-1/2 w-[137px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Shadow2 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[183px] items-center justify-center left-[-5.25px] top-1/2 w-[127px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Shadow3 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.2]">Primeiro dia de Ofensiva</p>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0" data-name="Image Container">
      <CardHeader />
      <TextContainer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Avançar</p>
      </div>
    </div>
  );
}

function CardDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Card Description Container">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#a4a4a4] text-[20px] text-center w-[min-content]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Mas sua ofensiva vai zerar se não praticar amanhã. Fique de olho! Complete as missões do dia e mantenha sua ofensiva. `}</p>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame />
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center max-w-[660px] min-h-px min-w-px pt-[32px] relative rounded-[9999px] w-full" data-name="Question Container">
      <ImageContainer />
      <CardDescriptionContainer />
    </div>
  );
}

function Spacer() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="spacer">
      <div className="size-full" />
    </div>
  );
}

function ContainerInterno() {
  return (
    <div className="content-stretch flex flex-col h-[736px] items-center justify-center overflow-clip px-[20px] py-[32px] relative rounded-[4px] shrink-0 w-[1312px]" data-name="Container interno">
      <QuestionContainer />
      <Spacer />
    </div>
  );
}

export default function Component1312PxDesktopQuiz() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] size-full" data-name="1312px - desktop-quiz">
      <NavBar />
      <ContainerInterno />
    </div>
  );
}