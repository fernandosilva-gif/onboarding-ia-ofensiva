/**
 * Primary Button — Convert Frames to Component Set
 *
 * Pré-requisito: os 12 frames nomeados "Button / Theme / State" já
 * devem existir na página (criados pelo agente via TalkToFigma).
 *
 * Como usar:
 *   Figma → Plugins → Development → Open Console → Cole e pressione Enter.
 *
 * O que faz:
 *   1. Encontra todos os frames que começam com "Button /"
 *   2. Converte cada frame em um ComponentNode, preservando:
 *      - fills, strokes, strokeWeight, cornerRadius
 *      - Auto Layout (layoutMode, padding, alignment, sizing)
 *      - Todos os filhos (texto, ícones, etc.)
 *   3. Renomeia para o padrão de variantes: "Theme=White, State=Default"
 *   4. Agrupa tudo com figma.combineAsVariants() → Component Set "Primary Button"
 *   5. Seleciona e dá zoom no resultado
 */

(async function convertToComponentSet() {
  const page = figma.currentPage;

  // --- 1. Carrega fontes necessárias ---
  await figma.loadFontAsync({ family: "Inter", style: "Medium" }).catch(() =>
    figma.loadFontAsync({ family: "Inter", style: "Regular" })
  );

  // --- 2. Localiza os frames de botão ---
  const buttonFrames = page
    .findAll((n) => n.type === "FRAME" && n.name.startsWith("Button /"))
    .sort((a, b) => a.name.localeCompare(b.name)) as FrameNode[];

  if (buttonFrames.length === 0) {
    figma.notify("❌ Nenhum frame encontrado com prefixo 'Button /'");
    return;
  }

  const components: ComponentNode[] = [];

  // --- 3. Converte cada frame em ComponentNode ---
  for (const frame of buttonFrames) {
    // "Button / White / Default" → Theme=White, State=Default
    const parts = frame.name.split(" / ");
    const theme = parts[1]?.trim() ?? "Unknown";
    const state = parts[2]?.trim() ?? "Unknown";

    const component = figma.createComponent();
    component.name = `Theme=${theme}, State=${state}`;
    component.x = frame.x;
    component.y = frame.y;
    component.resize(frame.width, frame.height);

    // Propriedades visuais
    component.fills = JSON.parse(JSON.stringify(frame.fills));
    component.strokes = JSON.parse(JSON.stringify(frame.strokes));
    component.strokeWeight = frame.strokeWeight as number;
    component.strokeAlign = frame.strokeAlign;

    if (typeof frame.cornerRadius === "number") {
      component.cornerRadius = frame.cornerRadius;
    }

    // Auto Layout
    if (frame.layoutMode !== "NONE") {
      component.layoutMode = frame.layoutMode;
      component.primaryAxisAlignItems = frame.primaryAxisAlignItems;
      component.counterAxisAlignItems = frame.counterAxisAlignItems;
      component.primaryAxisSizingMode = frame.primaryAxisSizingMode;
      component.counterAxisSizingMode = frame.counterAxisSizingMode;
      component.paddingTop = frame.paddingTop;
      component.paddingBottom = frame.paddingBottom;
      component.paddingLeft = frame.paddingLeft;
      component.paddingRight = frame.paddingRight;
      component.itemSpacing = frame.itemSpacing;
    }

    // Move filhos para o componente
    for (const child of [...frame.children]) {
      component.appendChild(child);
    }

    page.appendChild(component);
    frame.remove();
    components.push(component);
  }

  // --- 4. Agrupa como Component Set ---
  const componentSet = figma.combineAsVariants(components, page);
  componentSet.name = "Primary Button";

  // Borda tracejada padrão de Component Set (opcional — Figma já aplica)
  componentSet.strokeWeight = 1;
  componentSet.dashPattern = [8, 4];

  // --- 5. Foco no resultado ---
  figma.currentPage.selection = [componentSet];
  figma.viewport.scrollAndZoomIntoView([componentSet]);

  figma.notify(
    `✅ Component Set "Primary Button" criado com ${components.length} variantes!`
  );
})();
