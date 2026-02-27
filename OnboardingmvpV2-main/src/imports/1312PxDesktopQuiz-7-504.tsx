import svgPaths from "./svg-x099b9hcyg";
import imgCarouselImage from "figma:asset/2ccc1d3e9a575c74f4946ecb9dec50394d5ed7bf.png";
import imgCarouselImage1 from "figma:asset/66a2cfae6869324eb0f1c6fa92a484adf2361f98.png";
import imgCarouselImage2 from "figma:asset/09bce7ccb2402e60c0d812bd934d6c03a5571528.png";

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

function RecommendationsTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Recommendations Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[32px] text-white w-[724px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Trilhas recomendadas para você</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a4a4a4] text-[16px] w-[498px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Com o tempo que você informou, seu primeiro marco deve ser concluído em aproximadamente Y semanas.</p>
      </div>
    </div>
  );
}

function RecommendationsHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Recommendations Header">
      <RecommendationsTextContainer />
    </div>
  );
}

function Level() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Level">
      <RecommendationsHeader />
    </div>
  );
}

function ContainerInterno() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[96px] py-[64px] relative rounded-[4px] shrink-0 w-[1312px]" data-name="Container interno">
      <Level />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/plus">
          <mask height="16" id="mask0_4_715" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_4_715)">
            <path d={svgPaths.pf176e72} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="absolute bg-[#f2f2f2] bottom-[8.47px] right-[8.2px] rounded-[100px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] size-[32px]" data-name="button-icon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <IconPlus />
        </div>
      </div>
    </div>
  );
}

function CarouselImage() {
  return (
    <div className="content-stretch flex h-[327.467px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[217.6px]" data-name="Carousel Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#202020] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[8px] size-full" src={imgCarouselImage} />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCarouselImage1} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonIcon />
    </div>
  );
}

function CarouselItem() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Carousel Item">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[9px]" />
      <CarouselImage />
    </div>
  );
}

function IconPlus1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/plus">
          <mask height="16" id="mask0_4_715" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_4_715)">
            <path d={svgPaths.pf176e72} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon1() {
  return (
    <div className="absolute bg-[#f2f2f2] bottom-[8.47px] right-[8.2px] rounded-[100px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] size-[32px]" data-name="button-icon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <IconPlus1 />
        </div>
      </div>
    </div>
  );
}

function CarouselImage1() {
  return (
    <div className="content-stretch flex h-[327.467px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[217.6px]" data-name="Carousel Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#202020] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[8px] size-full" src={imgCarouselImage} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonIcon1 />
    </div>
  );
}

function CarouselItem1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Carousel Item">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[9px]" />
      <CarouselImage1 />
    </div>
  );
}

function IconPlus2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon/plus">
          <mask height="16" id="mask0_4_715" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_4_715)">
            <path d={svgPaths.pf176e72} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon2() {
  return (
    <div className="absolute bg-[#f2f2f2] bottom-[8.47px] right-[8.2px] rounded-[100px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] size-[32px]" data-name="button-icon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <IconPlus2 />
        </div>
      </div>
    </div>
  );
}

function CarouselImage2() {
  return (
    <div className="content-stretch flex h-[327.467px] items-center p-[8px] relative rounded-[8px] shrink-0 w-[217.6px]" data-name="Carousel Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#202020] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgCarouselImage2} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ButtonIcon2 />
    </div>
  );
}

function CarouselItem2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Carousel Item">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[9px]" />
      <CarouselImage2 />
    </div>
  );
}

function ContentItemsContainer() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-center relative shrink-0 w-full" data-name="Content Items Container">
      <CarouselItem />
      <CarouselItem1 />
      <CarouselItem2 />
    </div>
  );
}

function CarouselContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[712px]" data-name="Carousel Container">
      <ContentItemsContainer />
    </div>
  );
}

function Carrossel() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[832px]" data-name="carrossel">
      <CarouselContainer />
    </div>
  );
}

function CarouselSection() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[832px]" data-name="Carousel Section">
      <Carrossel />
    </div>
  );
}

function RecommendationsContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Recommendations Container">
      <ContainerInterno />
      <CarouselSection />
    </div>
  );
}

function RecommendationsSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Recommendations Section">
      <RecommendationsContainer />
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

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Avançar</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Button Container">
      <div className="bg-[#f2f2f2] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame />
      </div>
    </div>
  );
}

function ButtonSection() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Button Section">
      <ButtonContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Main Content">
      <RecommendationsSection />
      <Spacer />
      <ButtonSection />
    </div>
  );
}

export default function Component1312PxDesktopQuiz() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-clip pb-[32px] relative rounded-[8px] size-full" data-name="1312px - desktop-quiz">
      <NavBar />
      <MainContent />
    </div>
  );
}