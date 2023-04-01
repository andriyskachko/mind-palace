import { DOT_SIZE, DOT_SPACING } from '../shared/models/constants';
import { DestroyFn } from '../shared/models/destroy.interface';
import { assertCanvasContext } from './utils/assert-canvas-context';
import { generateDotPatternSource } from './utils/generate-dot-pattern-source';

export function setupGrid(canvas: HTMLCanvasElement): DestroyFn {
  const ctx = canvas.getContext('2d');
  assertCanvasContext(ctx);

  const dotPatternSource = generateDotPatternSource(DOT_SIZE, DOT_SPACING);
  const dotPattern = ctx.createPattern(dotPatternSource, 'repeat')!;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const draw = (): void => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = dotPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const resize = (): void => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  };

  draw();

  window.addEventListener('resize', resize, false);

  return () => window.removeEventListener('resize', resize);
}
