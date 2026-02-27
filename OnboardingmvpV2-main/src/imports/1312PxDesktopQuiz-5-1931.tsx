import svgPaths from "./svg-ytt7so6m2v";
import { imgCheck } from "./svg-fda0y";

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
    <div className="relative shrink-0 w-full" data-name="Question Text Container">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
          <p className="leading-[1.3]">Veja o que você será capaz de fazer:</p>
        </div>
      </div>
    </div>
  );
}

function Checkmark() {
  return (
    <div className="bg-[#3e695c] overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Checkmark">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-[calc(50%+0.5px)]" data-name="Icon/check">
        <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
            <path d={svgPaths.pb0c6980} fill="var(--fill-0, #E2E99C)" id="check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2]">Criar com clareza</p>
      </div>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Transformar ideias confusas em conceitos criativos bem definidos.</p>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Card Content">
      <CardTitle />
      <CardDescription />
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 w-[580px]" data-name="Card">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip pb-[24px] relative rounded-[inherit] w-full">
        <Checkmark />
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border-[#202020] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="bg-[#3e695c] overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Checkmark">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-[calc(50%+0.5px)]" data-name="Icon/check">
        <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
            <path d={svgPaths.pb0c6980} fill="var(--fill-0, #E2E99C)" id="check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2]">Usar ferramentas de IA com propósito</p>
      </div>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Náo só gerar, mas direcionar, refinar e decidir melhor.</p>
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Card Content">
      <CardTitle1 />
      <CardDescription1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="relative shrink-0 w-[580px]" data-name="Card">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip pb-[24px] relative rounded-[inherit] w-full">
        <Checkmark1 />
        <CardContent1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#202020] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkmark2() {
  return (
    <div className="bg-[#3e695c] overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Checkmark">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-[calc(50%+0.5px)]" data-name="Icon/check">
        <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
            <path d={svgPaths.pb0c6980} fill="var(--fill-0, #E2E99C)" id="check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2]">Pensar como profissional</p>
      </div>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Entender contexto, objetivo e impacto antes de criar.</p>
      </div>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Card Content">
      <CardTitle2 />
      <CardDescription2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="relative shrink-0 w-[580px]" data-name="Card">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip pb-[24px] relative rounded-[inherit] w-full">
        <Checkmark2 />
        <CardContent2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#202020] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkmark3() {
  return (
    <div className="bg-[#3e695c] overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Checkmark">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-[calc(50%+0.5px)]" data-name="Icon/check">
        <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
            <path d={svgPaths.pb0c6980} fill="var(--fill-0, #E2E99C)" id="check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2]">Construir projetos reais</p>
      </div>
    </div>
  );
}

function CardDescription3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Aplicar o aprendizado em desafios práticos desde o início.</p>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Card Content">
      <CardTitle3 />
      <CardDescription3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="relative shrink-0 w-[580px]" data-name="Card">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip pb-[24px] relative rounded-[inherit] w-full">
        <Checkmark3 />
        <CardContent3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#202020] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkmark4() {
  return (
    <div className="bg-[#3e695c] overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Checkmark">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-[calc(50%+0.5px)]" data-name="Icon/check">
        <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
            <path d={svgPaths.pb0c6980} fill="var(--fill-0, #E2E99C)" id="check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2]">Criar o hábito de aprender e evoluir</p>
      </div>
    </div>
  );
}

function CardDescription4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Description">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Com metas semanais, desafios e progressão.</p>
      </div>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Card Content">
      <CardTitle4 />
      <CardDescription4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[8px] shrink-0 w-[580px]" data-name="Card">
      <Checkmark4 />
      <CardContent4 />
    </div>
  );
}

function CardList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card List">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[4px] relative w-full">
        <Card />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

function QuestionList() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Question List">
      <QuestionTextContainer />
      <CardList />
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

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start justify-center relative shrink-0 w-[716px]" data-name="Question Container">
      <QuestionList />
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

function Spacer() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="spacer">
      <div className="size-full" />
    </div>
  );
}

function ContainerInterno() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[20px] py-[32px] relative rounded-[4px] shrink-0 w-[1312px]" data-name="Container interno">
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