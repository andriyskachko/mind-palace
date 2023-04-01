import { setupGrid } from './app/grid/grid';
import { html } from './app/shared/utils/html';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html`
  <canvas id="canvas" class="canvas--paning"></canvas>
`;

const destroyGrid = setupGrid(document.querySelector('#canvas')!);
