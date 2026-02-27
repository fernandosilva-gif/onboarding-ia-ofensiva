import svgPaths from "./svg-t2sfthycnq";
import { imgCheck } from "./svg-h0nfm";

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

function QuestionTextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[660px]" data-name="Question Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">Ao aprender, me sinto mais confortável quando…</p>
      </div>
    </div>
  );
}

function Answers() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[28px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Answers">
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Multipla Escolha">
        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white">
          <p className="leading-[12px]">a.</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#a4a4a4] text-[16px]">
          <p className="leading-[12px]">fica muito claro qual é o próximo passo</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Multipla Escolha">
        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white">
          <p className="leading-[12px]">b.</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#a4a4a4] text-[16px]">
          <p className="leading-[12px]">existe uma estrutura validada para seguir</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Multipla Escolha">
        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white">
          <p className="leading-[12px]">c.</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#a4a4a4] text-[16px]">
          <p className="leading-[12px]">posso adaptar sem precisar refazer tudo</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Multipla Escolha">
        <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white">
          <p className="leading-[12px]">d.</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#a4a4a4] text-[16px]">
          <p className="leading-[12px]">o resultado depende totalmente de mim</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Confirmar</p>
      </div>
    </div>
  );
}

function AnswerContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Answer Container">
      <Answers />
      <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="button">
        <div className="relative shrink-0 size-[16px]" data-name="Size=16">
          <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
              <path d={svgPaths.pb0c6980} fill="var(--fill-0, black)" id="check" />
            </svg>
          </div>
        </div>
        <Frame />
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start justify-center max-w-[638px] min-h-px min-w-px relative w-full" data-name="Question Container">
      <QuestionTextContainer />
      <AnswerContainer />
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