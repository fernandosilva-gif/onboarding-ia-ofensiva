
/**
 * Figma Button System Generator
 * This script generates a complete Button component set with 450 variants organized in a grid.
 * Theme: Dark Mode with Purple Accent Border
 */

async function main() {
    try {
        // 1. Setup Data - Updated for visual reference
        const STYLES = ['Contained', 'Outlined', 'Text'];
        // Keeping functional colors but will style them for dark mode
        const COLOR_NAMES = ['Primary', 'Secondary', 'Error', 'Warning', 'Info', 'Success'];
        const COLORS = {
            Primary: { hex: '#FFFFFF' }, // Primary in dark mode often white/light
            Secondary: { hex: '#9CA3AF' },
            Error: { hex: '#F87171' },
            Warning: { hex: '#FBBF24' },
            Info: { hex: '#60A5FA' },
            Success: { hex: '#4ADE80' }
        };
        // Mapping size names to dimensions from the image reference (approx)
        const SIZES = {
            XS: { height: 28, padX: 12, padY: 4, font: 12 },
            S: { height: 36, padX: 16, padY: 8, font: 14 },
            M: { height: 44, padX: 20, padY: 10, font: 14 },
            L: { height: 52, padX: 24, padY: 12, font: 16 },
            XL: { height: 60, padX: 32, padY: 16, font: 18 }
        };
        const SIZE_NAMES = ['XS', 'S', 'M', 'L', 'XL'];
        const STATES = ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'];

        // Load Fonts
        await Promise.all([
            figma.loadFontAsync({ family: "Inter", style: "Regular" }),
            figma.loadFontAsync({ family: "Inter", style: "Medium" }),
            figma.loadFontAsync({ family: "Inter", style: "Bold" })
        ]).catch(() => {
            console.log("Could not load all Inter styles, proceeding with Regular");
            return figma.loadFontAsync({ family: "Inter", style: "Regular" });
        });

        // 2. Helper Functions
        const hexToRgb = (hex) => {
            const r = parseInt(hex.substring(1, 3), 16) / 255;
            const g = parseInt(hex.substring(3, 5), 16) / 255;
            const b = parseInt(hex.substring(5, 7), 16) / 255;
            return { r, g, b };
        };

        const adjustBrightness = (rgb, factor) => {
            return {
                r: Math.max(0, Math.min(1, rgb.r * factor)),
                g: Math.max(0, Math.min(1, rgb.g * factor)),
                b: Math.max(0, Math.min(1, rgb.b * factor))
            };
        };

        // 3. Container for Documentation (Dark Mode)
        const container = figma.createFrame();
        container.name = "Button Documentation";
        container.fills = [{ type: 'SOLID', color: { r: 0.05, g: 0.05, b: 0.05 } }]; // Dark background
        figma.currentPage.appendChild(container);

        const variants = [];

        // Grid config
        const cellWidth = 260;
        const cellHeight = 120;
        const rowLabelWidth = 350;
        const headerSpacing = 100;

        // Documentation Labels (White Text)
        for (let i = 0; i < STATES.length; i++) {
            const header = figma.createText();
            header.fontName = { family: "Inter", style: "Bold" };
            header.characters = STATES[i];
            header.fontSize = 20;
            header.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
            header.x = rowLabelWidth + (i * cellWidth) + (cellWidth / 2) - (header.width / 2);
            header.y = 40;
            container.appendChild(header);
        }

        let rowIndex = 0;

        // 4. Generate Variants
        for (const style of STYLES) {
            for (const colorName of COLOR_NAMES) {
                // Section Header for Style/Color
                const sectionLabel = figma.createText();
                sectionLabel.characters = `${style} - ${colorName}`;
                sectionLabel.fontName = { family: "Inter", style: "Bold" };
                sectionLabel.fontSize = 32;
                sectionLabel.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                sectionLabel.x = 40;
                sectionLabel.y = headerSpacing + (rowIndex * cellHeight) + 40;
                container.appendChild(sectionLabel);
                rowIndex++;

                for (const sizeName of SIZE_NAMES) {
                    // Row Label (Size)
                    const rowLabel = figma.createText();
                    rowLabel.characters = `Size: ${sizeName}`;
                    rowLabel.fontSize = 16;
                    rowLabel.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
                    rowLabel.x = 80;
                    rowLabel.y = headerSpacing + (rowIndex * cellHeight) + (cellHeight / 2) - 8;
                    container.appendChild(rowLabel);

                    for (let s = 0; s < STATES.length; s++) {
                        const state = STATES[s];
                        const btn = figma.createComponent();
                        const baseColor = hexToRgb(COLORS[colorName].hex);
                        const size = SIZES[sizeName];

                        btn.name = `Style=${style}, Size=${sizeName}, Color=${colorName}, State=${state}`;
                        btn.layoutMode = "HORIZONTAL";
                        btn.primaryAxisAlignItems = "CENTER";
                        btn.counterAxisAlignItems = "CENTER";
                        btn.paddingLeft = btn.paddingRight = size.padX;
                        btn.paddingTop = btn.paddingBottom = size.padY;
                        // Pill Shape (Full Radius)
                        btn.cornerRadius = 100;
                        btn.resizeWithoutConstraints(btn.width, size.height);

                        const text = figma.createText();
                        try {
                            text.fontName = { family: "Inter", style: "Medium" };
                        } catch (e) {
                            text.fontName = { family: "Inter", style: "Regular" };
                        }
                        // Requested Text
                        text.characters = "ENVIAR →";
                        text.fontSize = size.font;
                        btn.appendChild(text);

                        // Layout/Styles
                        let fillColor = { r: baseColor.r, g: baseColor.g, b: baseColor.b, a: 1 };
                        let textColor = { r: 0, g: 0, b: 0 }; // Default text black/dark
                        let opacity = 1;
                        let hasStroke = false;
                        let hasFill = false;
                        let effects = [];

                        // Dark mode specific styling logic
                        if (style === 'Contained') {
                            hasFill = true;
                            // For dark mode, contained buttons usually have light text against dark bg, or specifically contrasting
                            // If baseColor is White (Primary), text should be black.
                            if (colorName === 'Primary') textColor = { r: 0, g: 0, b: 0 };
                            else textColor = { r: 0, g: 0, b: 0 }; // Assuming light pastels for others
                        } else if (style === 'Outlined') {
                            hasFill = (state === 'Hovered' || state === 'Pressed');
                            hasStroke = true;
                            textColor = { r: baseColor.r, g: baseColor.g, b: baseColor.b }; // Colored text
                            if (hasFill) fillColor = { r: baseColor.r, g: baseColor.g, b: baseColor.b, a: 0.1 };
                        } else if (style === 'Text') {
                            hasFill = (state === 'Hovered' || state === 'Pressed');
                            textColor = { r: baseColor.r, g: baseColor.g, b: baseColor.b };
                            if (hasFill) fillColor = { r: baseColor.r, g: baseColor.g, b: baseColor.b, a: 0.1 };
                        }

                        if (state === 'Hovered') {
                            if (style === 'Contained') {
                                const adj = adjustBrightness(baseColor, 0.9);
                                fillColor = { r: adj.r, g: adj.g, b: adj.b, a: 1 };
                            }
                        }
                        if (state === 'Pressed') {
                            if (style === 'Contained') {
                                const adj = adjustBrightness(baseColor, 0.8);
                                fillColor = { r: adj.r, g: adj.g, b: adj.b, a: 1 };
                            }
                        }
                        if (state === 'Disabled') {
                            opacity = 0.4;
                            // Make it gray
                            fillColor = { r: 0.5, g: 0.5, b: 0.5, a: 1 };
                            textColor = { r: 0.3, g: 0.3, b: 0.3 };
                        }
                        if (state === 'Focused') {
                            // Focus ring (cyan/purple)
                            effects.push({
                                type: "DROP_SHADOW",
                                color: { r: 0.4, g: 0.2, b: 1, a: 0.6 }, // Purple-ish focus
                                offset: { x: 0, y: 0 },
                                radius: 0, spread: 3, visible: true, blendMode: "NORMAL"
                            });
                        }

                        if (hasFill) btn.fills = [{ type: 'SOLID', color: { r: fillColor.r, g: fillColor.g, b: fillColor.b }, opacity: fillColor.a }];
                        else btn.fills = [];

                        if (hasStroke) {
                            btn.strokes = [{ type: 'SOLID', color: { r: baseColor.r, g: baseColor.g, b: baseColor.b } }];
                            btn.strokeWeight = 1;
                        }

                        text.fills = [{ type: 'SOLID', color: textColor }];
                        btn.opacity = opacity;
                        btn.effects = effects;

                        // Position in global space (before combine)
                        btn.x = rowLabelWidth + (s * cellWidth) + (cellWidth / 2) - (btn.width / 2);
                        btn.y = headerSpacing + (rowIndex * cellHeight) + (cellHeight / 2) - (btn.height / 2);

                        figma.currentPage.appendChild(btn);
                        variants.push(btn);
                    }
                    rowIndex++;
                }
                rowIndex++; // Gap between groups
            }
        }

        // Combine into Component Set
        const componentSet = figma.combineAsVariants(variants, container);
        componentSet.name = "Button Set";
        componentSet.x = rowLabelWidth;
        componentSet.y = headerSpacing;

        // Apply visual properties to the Component Set wrapper (purple dashed)
        // Note: Component Sets in Figma act like Frames.
        // Requested: width: 1710; height: 376; border: 1px solid hsba(266, 72%, 100%, 1); dashed;
        // The generate grid is huge so forcing 376 height might be for *one* row, but I will apply the style.
        componentSet.resizeWithoutConstraints(1710, componentSet.height); // Set width
        componentSet.strokes = [{ type: 'SOLID', color: { r: 0.65, g: 0, b: 1 } }]; // Purple
        componentSet.strokeWeight = 1;
        componentSet.dashPattern = [10, 5];
        componentSet.cornerRadius = 5;

        // Resize container to fit everything
        container.resize(rowLabelWidth + (STATES.length * cellWidth) + 200, headerSpacing + (rowIndex * cellHeight) + 100);

        figma.viewport.scrollAndZoomIntoView([container]);
        figma.closePlugin("Button System Organized!");

    } catch (error) {
        if (figma) figma.closePlugin("Error: " + error.message);
    }
}

main();
