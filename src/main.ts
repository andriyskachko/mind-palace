import { html } from './utilities/html';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html`
  <h1>Hello World!</h1>
`;
