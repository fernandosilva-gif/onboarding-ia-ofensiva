import svgPaths from "./svg-70ngdnmrm6";
import imgCarouselImage from "figma:asset/2ccc1d3e9a575c74f4946ecb9dec50394d5ed7bf.png";
import imgCarouselImage1 from "figma:asset/66a2cfae6869324eb0f1c6fa92a484adf2361f98.png";
import imgCarouselImage2 from "figma:asset/09bce7ccb2402e60c0d812bd934d6c03a5571528.png";
import imgFrame1312 from "figma:asset/1f79aef32de5d2eb4b14b300dbd08f5b3f0c0075.png";
import imgFrame1313 from "figma:asset/3acd9a1d5ac2b5d658daefff7d40da13fbe524a0.png";
import imgFrame1314 from "figma:asset/37525c303db93b8ded643279ebeb55ae332fb3ab.png";
import imgFrame1315 from "figma:asset/0506aca75d1dc88d88d0cbbf307a3820f0e3cd80.png";
import imgFrame1316 from "figma:asset/abb47ef9289f8fc41b8d9139230f22803b9fdf97.png";
import { imgAdd2 } from "./svg-iwg4r";

function Frame2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-end right-[20px] top-[calc(50%+0.5px)] w-[32px]">
      <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center justify-end right-0 top-0" data-name="loadbar">
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
    <div className="bg-black content-stretch flex h-[64px] items-center overflow-clip relative shrink-0 w-full" data-name="Navbar_quiz">
      <Frame2 />
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[16px] px-[4px] py-[2px] top-1/2" data-name="_buttonback">
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
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Nav_Bar">
        <NavbarQuiz />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[34px] left-1/2 overflow-clip top-1/2 w-[24px]" data-name="Symbol">
          <div className="absolute inset-[0_0_28.57%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.2857">
              <path d={svgPaths.pefc9480} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[71.43%_30%_0_30%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.71429">
              <path d={svgPaths.p30a63040} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">Trilhas recomendadas para você</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a4a4a4] text-[14px] w-[270px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Com o tempo que você informou, seu primeiro marco deve ser concluído em aproximadamente Y semanas. Escolha as três melhores aulas pra sua realidade</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Level() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Level">
      <Frame13 />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[10.627px]" data-name="Icon/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6271 10.6277">
        <g id="Icon/plus">
          <mask height="11" id="mask0_6_519" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="10.6271" id="Bounding box" width="10.6271" x="0.00151333" />
          </mask>
          <g mask="url(#mask0_6_519)">
            <path d={svgPaths.p1dca2c30} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="absolute bg-[#f2f2f2] bottom-[5.63px] right-[5.45px] rounded-[66.42px] shadow-[0px_0px_10.627px_0px_rgba(0,0,0,0.2)] size-[21.254px]" data-name="button-icon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15.941px] relative size-full">
          <IconPlus />
        </div>
      </div>
    </div>
  );
}

function CarouselImage() {
  return (
    <div className="content-stretch flex h-[217.502px] items-center p-[5.314px] relative rounded-[5.314px] shrink-0 w-[144.529px]" data-name="Carousel Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5.314px]">
        <div className="absolute bg-[#202020] inset-0 rounded-[5.314px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[5.314px] size-full" src={imgCarouselImage} />
        <img alt="" className="absolute max-w-none object-cover rounded-[5.314px] size-full" src={imgCarouselImage1} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.328px] border-black border-solid inset-0 pointer-events-none rounded-[5.314px]" />
      <ButtonIcon />
    </div>
  );
}

function CarouselItem() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.314px] shrink-0" data-name="Carousel Item">
      <div aria-hidden="true" className="absolute border-[0.664px] border-solid border-white inset-[-0.664px] pointer-events-none rounded-[5.978px]" />
      <CarouselImage />
    </div>
  );
}

function IconPlus1() {
  return (
    <div className="relative shrink-0 size-[10.627px]" data-name="Icon/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6271 10.628">
        <g id="Icon/plus">
          <mask height="11" id="mask0_6_523" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="10.6271" id="Bounding box" width="10.6271" x="0.00265645" />
          </mask>
          <g mask="url(#mask0_6_523)">
            <path d={svgPaths.p13656000} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon1() {
  return (
    <div className="absolute bg-[#f2f2f2] bottom-[5.62px] right-[5.45px] rounded-[66.42px] shadow-[0px_0px_10.627px_0px_rgba(0,0,0,0.2)] size-[21.254px]" data-name="button-icon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15.941px] relative size-full">
          <IconPlus1 />
        </div>
      </div>
    </div>
  );
}

function CarouselImage1() {
  return (
    <div className="content-stretch flex h-[217.502px] items-center p-[5.314px] relative rounded-[5.314px] shrink-0 w-[144.529px]" data-name="Carousel Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5.314px]">
        <div className="absolute bg-[#202020] inset-0 rounded-[5.314px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[5.314px] size-full" src={imgCarouselImage} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.328px] border-black border-solid inset-0 pointer-events-none rounded-[5.314px]" />
      <ButtonIcon1 />
    </div>
  );
}

function CarouselItem1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.314px] shrink-0" data-name="Carousel Item">
      <div aria-hidden="true" className="absolute border-[0.664px] border-solid border-white inset-[-0.664px] pointer-events-none rounded-[5.978px]" />
      <CarouselImage1 />
    </div>
  );
}

function IconPlus2() {
  return (
    <div className="relative shrink-0 size-[10.627px]" data-name="Icon/plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6271 10.628">
        <g id="Icon/plus">
          <mask height="11" id="mask0_6_515" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="10.6271" id="Bounding box" width="10.6271" x="0.00351455" />
          </mask>
          <g mask="url(#mask0_6_515)">
            <path d={svgPaths.p32189760} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon2() {
  return (
    <div className="absolute bg-[#f2f2f2] bottom-[5.62px] right-[5.45px] rounded-[66.42px] shadow-[0px_0px_10.627px_0px_rgba(0,0,0,0.2)] size-[21.254px]" data-name="button-icon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[15.941px] relative size-full">
          <IconPlus2 />
        </div>
      </div>
    </div>
  );
}

function CarouselImage2() {
  return (
    <div className="content-stretch flex h-[217.502px] items-center p-[5.314px] relative rounded-[5.314px] shrink-0 w-[144.529px]" data-name="Carousel Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5.314px]">
        <div className="absolute bg-[#202020] inset-0 rounded-[5.314px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[5.314px] size-full" src={imgCarouselImage2} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.328px] border-black border-solid inset-0 pointer-events-none rounded-[5.314px]" />
      <ButtonIcon2 />
    </div>
  );
}

function CarouselItem2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.314px] shrink-0" data-name="Carousel Item">
      <div aria-hidden="true" className="absolute border-[0.664px] border-solid border-white inset-[-0.664px] pointer-events-none rounded-[5.978px]" />
      <CarouselImage2 />
    </div>
  );
}

function ContentItemsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content Items Container">
      <CarouselItem />
      <CarouselItem1 />
      <CarouselItem2 />
    </div>
  );
}

function Carrossel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="carrossel">
      <ContentItemsContainer />
    </div>
  );
}

function ContainerInterno() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container interno">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[8px] py-[32px] relative w-full">
          <Level />
          <Carrossel />
        </div>
      </div>
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

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#f2f2f2] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Frame3 />
      </div>
    </div>
  );
}

function CourseCard() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Course Card">
      <button className="block col-1 cursor-pointer ml-0 mt-0 relative row-1 size-[24px]" data-name="icon">
        <div className="absolute flex inset-[-0.09%] items-center justify-center">
          <div className="flex-none rotate-45 size-[8.095px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.021px_0.021px] mask-size-[24px_24px] relative size-full" data-name="add_2" style={{ maskImage: `url('${imgAdd2}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p1ad2a780} fill="var(--fill-0, #F2F2F2)" id="add_2" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[20px] text-white">Substituir trilha</p>
      <CourseCard />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <Frame15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#a4a4a4] text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[1.5]">{`Escolha uma alternativa para `}</span>
        <span className="leading-[1.5] text-white">Protocolo 3-2-1, História das IAs e Arquivo Legado.</span>
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="aspect-[204/307] col-1 justify-self-stretch relative rounded-[3.811px] row-1 shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgFrame1312} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="aspect-[204/307] col-1 justify-self-stretch relative rounded-[3.811px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgFrame1313} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="aspect-[204/307] col-2 justify-self-stretch relative rounded-[3.811px] row-1 shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgFrame1314} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="aspect-[204/307] col-1 justify-self-stretch relative rounded-[3.811px] row-2 shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgFrame1315} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="aspect-[204/307] col-2 justify-self-stretch relative rounded-[3.811px] row-2 shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgFrame1316} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="aspect-[204/307] col-1 justify-self-stretch mix-blend-luminosity opacity-60 relative rounded-[3.811px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgCarouselImage1} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="aspect-[204/307] col-2 justify-self-stretch mix-blend-luminosity opacity-60 relative rounded-[3.811px] row-3 shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-contain rounded-[3.811px] size-full" src={imgCarouselImage} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="aspect-[204/307] col-2 justify-self-stretch mix-blend-luminosity opacity-60 relative rounded-[3.811px] row-4 shrink-0">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[3.811px]">
        <div className="absolute bg-[#202020] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[3.811px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[3.811px] size-full" src={imgCarouselImage2} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,fit-content(100%))] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame6 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Avançar</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="footer">
      <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip px-[24px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame1 />
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-[#202020] content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative rounded-[3.811px] shrink-0 w-[320px]" data-name="modal">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

function Pop() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 min-w-[148.61126708984375px] top-0 w-[320px]" data-name="Pop">
      <Modal />
    </div>
  );
}

function Spacer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-start left-1/2 overflow-clip p-[3.811px] top-0 w-[320px]" data-name="spacer">
      <Pop />
    </div>
  );
}

export default function Component1312PxDesktopQuiz() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] size-full" data-name="1312px - desktop-quiz">
      <NavBar />
      <ContainerInterno />
      <Frame14 />
      <Spacer />
    </div>
  );
}