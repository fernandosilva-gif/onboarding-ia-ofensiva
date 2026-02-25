(async function convertToComponentSet() {
  const page = figma.currentPage;
  const buttonFrames = page.findAll(n =>
    n.type === 'FRAME' && n.name.toLowerCase().includes('button /')
  );

  if (buttonFrames.length === 0) {
    figma.notify('Nenhum frame com nome "Button / ..." encontrado!');
    figma.closePlugin();
    return;
  }

  const components = [];
  for (const frame of buttonFrames) {
    const parts = frame.name.split(' / ');
    const theme = (parts[1] || 'Default').trim();
    const state = (parts[2] || 'Default').trim();

    const component = figma.createComponent();
    component.name = 'Theme=' + theme + ', State=' + state;
    component.x = frame.x;
    component.y = frame.y;
    component.resize(frame.width, frame.height);

    component.fills = JSON.parse(JSON.stringify(frame.fills));
    component.strokes = JSON.parse(JSON.stringify(frame.strokes));
    component.strokeWeight = frame.strokeWeight;
    component.cornerRadius = frame.cornerRadius;

    if (frame.layoutMode !== 'NONE') {
      component.layoutMode = frame.layoutMode;
      component.primaryAxisAlignItems = frame.primaryAxisAlignItems;
      component.counterAxisAlignItems = frame.counterAxisAlignItems;
      component.paddingTop = frame.paddingTop;
      component.paddingBottom = frame.paddingBottom;
      component.paddingLeft = frame.paddingLeft;
      component.paddingRight = frame.paddingRight;
      component.itemSpacing = frame.itemSpacing;
    }

    for (const child of [...frame.children]) {
      component.appendChild(child);
    }
    components.push(component);
    frame.remove();
  }

  const componentSet = figma.combineAsVariants(components, page);
  componentSet.name = 'Primary Button';
  figma.viewport.scrollAndZoomIntoView([componentSet]);
  figma.notify(components.length + ' variantes criadas!');
  figma.closePlugin();
})();
