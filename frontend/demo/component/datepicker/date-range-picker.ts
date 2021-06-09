import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/flow-frontend/datepickerConnector'; // hidden-source-line

import { html, LitElement, customElement } from 'lit-element';
import '@vaadin-component-factory/vcf-date-range-picker';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('date-range-picker')
export class Example extends LitElement {
  constructor() {
    super();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(this.shadowRoot);
  }

  render() {
    return html`
      <!-- tag::snippet[] -->
      <vcf-date-range-picker label="Start date"></vcf-date-range-picker>
      <!-- end::snippet[] -->
    `;
  }
}
