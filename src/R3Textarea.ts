import { html, LitElement, property } from 'lit-element';
import style from './R3TextareaSyle';

export class R3Textarea extends LitElement {
  static styles = [style];

  @property({type: String})
  ambient = 'light';

  @property({type: Number})
  height = 10;

  @property({ type: String })
  label = 'Default Text';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, attribute: 'read-only' })
  readOnly = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  value = '';

  @property({type: Number})
  width = 20;

  @property({ type: Boolean, attribute: 'with-label' })
  withLabel = false;

  get _getLabel() {
    return this.withLabel ? html`
      <label id="label">${this.label}</label>
    ` : '';
  }

  get _getTextArea() {
    return html`
      <textarea 
        id="textarea"
        placeholder="${this.placeholder}"
        style="width: ${this.width}rem; height: ${this.height}rem;"
      >${this.value}</textarea>   
    `;
  }

  render() {
    return html`
      <div id="container" class="${this.ambient}">
        ${this._getLabel}
        ${this._getTextArea}
      </div>
    `;
  }
}
