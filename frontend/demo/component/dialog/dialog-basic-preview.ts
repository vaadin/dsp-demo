import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit-element';
import { render } from 'lit-html';
import { guard } from 'lit-html/directives/guard';

import '@vaadin/vaadin-dialog/vaadin-dialog';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';

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
      <vaadin-dialog
        opened
        no-close-on-outside-click
        no-close-on-esc
        .renderer="${guard([], () => (root: HTMLElement) => {
          render(
            html`
              <vaadin-vertical-layout
                theme="spacing"
                style="width: 300px; max-width: 100%; align-items: stretch;"
              >
                <h2 style="margin: var(--lumo-space-m) 0 0 0; font-size: 1.5em; font-weight: bold;">
                  New employee
                </h2>
                <vaadin-vertical-layout style="align-items: stretch;">
                  <vaadin-text-field label="First name"></vaadin-text-field>
                  <vaadin-text-field label="Last name"></vaadin-text-field>
                </vaadin-vertical-layout>
                <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-end">
                  <vaadin-button> Cancel </vaadin-button>
                  <vaadin-button theme="primary"> Save changes </vaadin-button>
                </vaadin-horizontal-layout>
              </vaadin-vertical-layout>
            `,
            root
          );
        })}"
      ></vaadin-dialog>
    `;
  }

  // Allow the CSS to target the body element
  createRenderRoot() {
    return this;
  }
}
