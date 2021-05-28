import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement, internalProperty, customElement } from 'lit-element';
import '@vaadin/vaadin-confirm-dialog/vaadin-confirm-dialog';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('confirm-dialog-basic')
export class Example extends LitElement {
  constructor() {
    super();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(this.shadowRoot);
  }

  @internalProperty()
  private dialogOpened = false;

  @internalProperty()
  private status = '';

  render() {
    return html`
      <vaadin-horizontal-layout
        style="align-items: center; justify-content: center;"
        theme="spacing"
      >
        <vaadin-button @click="${() => (this.dialogOpened = true)}">
          Open confirm dialog
        </vaadin-button>

        <!-- tag::snippet[] -->
        <vaadin-confirm-dialog
          header="Apply changes"
          cancel
          @cancel="${() => (this.status = 'Canceled')}"
          confirm-text="Apply"
          @confirm="${() => (this.status = 'Applied')}"
          .opened="${this.dialogOpened}"
          @opened-changed="${this.openedChanged}"
        >
          Are you sure you want to apply the changes you’ve made?
        </vaadin-confirm-dialog>
        <!-- end::snippet[] -->

        <span ?hidden="${this.status == ''}">Status: ${this.status}</span>
      </vaadin-horizontal-layout>
    `;
  }

  openedChanged(e: CustomEvent) {
    this.dialogOpened = e.detail.value;
    if (this.dialogOpened) {
      this.status = '';
    }
  }
}
