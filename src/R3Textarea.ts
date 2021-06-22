/* eslint import/extensions: "off" */
import { html, LitElement, property } from 'lit-element';
import style from './R3TextareaSyle';

export class R3Textarea extends LitElement {
  static styles = [style];

  @property({ type: String })
  ambient = 'light';

  @property({ type: String })
  description = 'Default Description';

  @property({ type: String, attribute: 'description-type' })
  descriptionType = 'info';

  @property({ type: String })
  label = 'Default Text';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: Array })
  size = { width: 20, height: 10 };

  @property({ type: String })
  value = '';

  @property({ type: Boolean, attribute: 'with-description' })
  withDescription = false;

  @property({ type: Boolean, attribute: 'with-label' })
  withLabel = false;

  get _getDescription() {
    return this.withDescription
      ? html`
          <label id="description" class="${this.descriptionType}"
            >${this.description}</label
          >
        `
      : '';
  }

  get _getLabel() {
    return this.withLabel
      ? html` <label id="label">${this.label}</label> `
      : '';
  }

  get _getTextArea() {
    return html`
      <textarea
        id="textarea"
        placeholder="${this.placeholder}"
        style="width: ${this.size.width}rem; height: ${this.size.height}rem;"
      >
${this.value}</textarea
      >
    `;
  }

  render() {
    return html`
      <div id="container" class="${this.ambient}">
        ${this._getLabel} ${this._getTextArea} ${this._getDescription}
      </div>
    `;
  }
}
