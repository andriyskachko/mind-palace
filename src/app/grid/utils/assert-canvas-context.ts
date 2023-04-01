export function assertCanvasContext(
  context: CanvasRenderingContext2D | null
): asserts context is CanvasRenderingContext2D {
  if (!context) {
    throw new Error('Context is null or undefined');
  }
}
