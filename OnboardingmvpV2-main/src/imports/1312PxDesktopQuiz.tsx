import svgPaths from "./svg-mvwzc123e0";
import imgImage from "figma:asset/5a22b06b599f8814df73ca655de9994548664898.png";

function Load() {
  return <div className="bg-[#d4d4d4] h-[2px] shrink-0 w-[48px]" data-name="load" />;
}

function Frame2() {
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
      <Frame2 />
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

function Frame() {
  return (
    <div className="bg-white relative rounded-[9999px] size-[204px]" data-name="frame">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[253px] items-center justify-center left-[-85px] top-[-24.5px] w-[374px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[253px] relative w-[374px]" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#303030] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function QuestionTextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[4px] relative shrink-0 w-[660px]" data-name="Question Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-[376px]">
        <p className="leading-[1.2] whitespace-pre-wrap">Antes de criar sua conta, vamos montar sua jornada na Overlens.</p>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0" data-name="Image Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame />
        </div>
      </div>
      <QuestionTextContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Começar</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button Container">
      <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame1 />
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center max-w-[660px] min-h-px min-w-px pt-[112px] relative rounded-[9999px] w-full" data-name="Question Container">
      <ImageContainer />
      <ButtonContainer />
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