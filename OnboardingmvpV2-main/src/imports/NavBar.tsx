import svgPaths from "./svg-wksbr3ketz";

function Frame() {
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
      <Frame />
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[16px] px-[4px] py-[2px] top-1/2" data-name="_buttonback">
        <ArrowBackIosNew />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[16px] whitespace-nowrap">
          <p className="leading-[16px]">Voltar</p>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Nav_Bar">
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
  );
}