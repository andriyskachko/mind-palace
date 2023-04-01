import { DotPatternGenerator } from '../../shared/models/dot-pattern-generator.interface';

export const generateDotPatternSource = ((): DotPatternGenerator => {
  let patternCanvas: HTMLCanvasElement;
  let patternCtx: CanvasRenderingContext2D;

  return (
    dotSize: number,
    dotSpacing: number,
  ): CanvasImageSource => {
    if (!patternCanvas) {
      patternCanvas = document.createElement('canvas');
      patternCanvas.width = dotSpacing;
      patternCanvas.height = dotSpacing;
      patternCtx = patternCanvas.getContext('2d')!;
      patternCtx.beginPath();
      patternCtx.arc(
        dotSpacing / 2,
        dotSpacing / 2,
        dotSize / 2,
        0,
        Math.PI * 2
      );
      patternCtx.fill();
    }

    return patternCanvas;
  };
})();
