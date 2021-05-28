import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit-element';
import '@vaadin/vaadin-confirm-dialog/vaadin-confirm-dialog';

export class Example extends LitElement {
  render() {
    return html`
      <style>
        /* Prevent the user from interacting with the preview dialog */
        body::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          pointer-events: auto;
        }
      </style>
      <vaadin-confirm-dialog header="Apply changes" cancel confirm-text="Apply" opened>
        Are you sure you want to apply the changes you’ve made?
      </vaadin-confirm-dialog>
    `;
  }

  // Allow the CSS to target the body element
  createRenderRoot() {
    return this;
  }
}
