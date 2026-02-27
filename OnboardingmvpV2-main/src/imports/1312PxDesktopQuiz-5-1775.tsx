import svgPaths from "./svg-wxou1e9c6i";

function Load() {
  return <div className="bg-[#d4d4d4] h-[2px] shrink-0 w-[48px]" data-name="load" />;
}

function Frame4() {
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
      <Frame4 />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Question Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">Crie seu perfil</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a4a4] text-[16px] whitespace-nowrap">
        <p className="leading-none">Nome</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a4a4] text-[16px] whitespace-nowrap">
        <p className="leading-none">E-mail</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a4a4] text-[16px] whitespace-nowrap">
        <p className="leading-none">Senha</p>
      </div>
    </div>
  );
}

function InputFieldStates() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Input Field States">
      <div className="bg-[#101010] content-stretch flex h-[60px] items-center p-[24px] relative rounded-[4px] shrink-0 w-[320px]" data-name="placeholder">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame />
      </div>
      <div className="bg-[#101010] content-stretch flex h-[60px] items-center p-[24px] relative rounded-[4px] shrink-0 w-[320px]" data-name="placeholder">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame1 />
      </div>
      <div className="bg-[#101010] content-stretch flex h-[60px] items-center p-[24px] relative rounded-[4px] shrink-0 w-[320px]" data-name="placeholder">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame2 />
      </div>
    </div>
  );
}

function InputFields() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Input Fields">
      <QuestionTextContainer />
      <InputFieldStates />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Criar conta</p>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Input Container">
      <InputFields />
      <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame3 />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="h-0 relative shrink-0 w-[138.5px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138.5 1">
                <path d="M0 0.5H138.5" id="Vector 1" stroke="var(--stroke-0, #202020)" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a4a4] text-[14px] whitespace-nowrap">
            <p className="leading-[1.3]">ou</p>
          </div>
          <div className="h-0 relative shrink-0 w-[138.5px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138.5 1">
                <path d="M0 0.5H138.5" id="Vector 1" stroke="var(--stroke-0, #202020)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="google logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_1719)" id="google logo">
          <path d={svgPaths.p36b9e100} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_1719">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GoogleButtonTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Google Button Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Google</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#202020] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[100px]" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <GoogleLogo />
          <GoogleButtonTextContainer />
        </div>
      </div>
    </div>
  );
}

function GoogleButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Google Button Container">
      <Button />
    </div>
  );
}

function DividerAndButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Divider and Button Container">
      <Divider />
      <GoogleButtonContainer />
    </div>
  );
}

function TermsContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#a4a4a4] text-[12px] text-center w-full" data-name="Terms Container">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Ao entrar na Overlens, você concocorda com os nossos Termos e política de Privacidade.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Este ste é protegido pela reCAPCTCHA Enterprise. Aplicam-se a Política de Privacidade e os Termos de Uso do Google.</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[344px]" data-name="Button Container">
      <DividerAndButtonContainer />
      <TermsContainer />
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center max-w-[660px] min-h-px min-w-px relative w-full" data-name="Question Container">
      <InputContainer />
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