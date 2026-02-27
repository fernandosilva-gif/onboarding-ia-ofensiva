import svgPaths from "./svg-8j5irco9un";
import { imgCheck } from "./svg-dz9op";

function Load() {
  return <div className="bg-[#d4d4d4] h-[2px] shrink-0 w-[48px]" data-name="load" />;
}

function Frame3() {
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
      <Frame3 />
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
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic px-[4px] relative shrink-0 w-[660px] whitespace-nowrap" data-name="Question Text Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-white">
        <p className="leading-[1.3]">Vou lembrar voce de praticar até virar um hábito!</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a4a4a4] text-[16px]">
        <p>
          <span className="leading-[1.5]">Clique em</span>
          <span className="leading-[1.5]">{` `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] underline">Permitir</span>
          <span className="leading-[1.5]">{` `}</span>
          <span className="leading-[1.5]">para habilitar as</span>
          <span className="leading-[1.5]">{` permissões de notificação push.`}</span>
        </p>
      </div>
    </div>
  );
}

function NotificationText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Notification Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.2]">overlens.com.br deseja</p>
      </div>
    </div>
  );
}

function NotificationsActive() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="notifications_active">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="notifications_active">
          <mask height="16" id="mask0_5_2062" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5_2062)">
            <path d={svgPaths.p28083000} fill="var(--fill-0, #A4A4A4)" id="notifications_active_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NotificationIconContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Notification Icon Container">
      <NotificationsActive />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap">
        <p className="leading-[1.4]">Mostrar notificações</p>
      </div>
    </div>
  );
}

function NotificationContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Notification Container">
      <NotificationText />
      <NotificationIconContainer />
    </div>
  );
}

function NotificationContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Notification Container">
      <NotificationContainer2 />
    </div>
  );
}

function NotificationContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Notification Container">
      <NotificationContainer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-left whitespace-nowrap">
        <p className="leading-[16px]">Permitir</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Bloquear</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Button Container">
      <button className="bg-[#bcbcbc] content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="button">
        <Frame />
      </button>
      <div className="h-[32px] relative rounded-[100px] shrink-0" data-name="button">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[16px] relative rounded-[inherit]">
          <Frame1 />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#101010] content-stretch flex flex-col h-[142px] items-start justify-between overflow-clip p-[24px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Card">
      <NotificationContainer />
      <ButtonContainer />
    </div>
  );
}

function QuestionCard() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0" data-name="Question Card">
      <QuestionTextContainer />
      <Card />
    </div>
  );
}

function Frame2() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start justify-center max-w-[660px] min-h-px min-w-px relative w-full" data-name="Question Container">
      <QuestionCard />
      <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="button">
        <div className="relative shrink-0 size-[16px]" data-name="Size=16">
          <div className="absolute inset-[25.57%_16.87%_25.62%_16.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.7px_-4.092px] mask-size-[16px_16px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 7.80833">
              <path d={svgPaths.pb0c6980} fill="var(--fill-0, black)" id="check" />
            </svg>
          </div>
        </div>
        <Frame2 />
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