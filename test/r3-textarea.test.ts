import { html, fixture, expect, assert } from '@open-wc/testing';
import { R3Textarea } from '../src/R3Textarea.js';
import '../r3-textarea.js';

let el: R3Textarea;

const cleanComponent = async () => {
  el = await fixture<R3Textarea>(html`<r3-textarea></r3-textarea>`);
  await el.updateComplete;
}

const getAttribute = (selector: String = '', attribute: string) => {
  return el.shadowRoot?.querySelector(`${selector}`)?.getAttribute(attribute);
}

describe('R3Textarea', () => {
  describe('Default value', () => {
    cleanComponent();

    it('Props value', () => {
      expect(el.ambient).to.equal('light');
      assert.typeOf(el.ambient, 'String');

      expect(el.height).to.equal(10);
      assert.typeOf(el.height, 'Number');
      
      expect(el.label).to.equal('Default Text');
      assert.typeOf(el.label, 'String');

      expect(el.placeholder).to.equal('');
      assert.typeOf(el.placeholder, 'String');

      expect(el.readOnly).to.be.false;
      assert.typeOf(el.readOnly, 'Boolean');

      expect(el.required).to.be.false;
      assert.typeOf(el.required, 'Boolean');

      expect(el.value).to.equal('');
      assert.typeOf(el.value, 'String');

      expect(el.width).to.equal(20);
      assert.typeOf(el.width, 'Number');

      expect(el.withLabel).to.be.false;
      assert.typeOf(el.withLabel, 'Boolean');
    });

    it('View ambient to container', () => {
      const container = getAttribute('#container', 'class');
      expect(container).to.equal('light');
    });

    it('View label not displayed', () => {
      const labelText = el.shadowRoot?.querySelector('#label')?.textContent;
      expect(labelText).to.equal(undefined);
    });

    it('Value in textarea is empty', () => {
      const value = el.shadowRoot?.querySelector('#textarea')?.textContent;
      expect(value).to.equal('');
    });

    it('Textarea size', () => {
      const size = getAttribute('#textarea', 'style');
      expect(size).to.equal('width: 20rem; height: 10rem;');
    });

    it('Placeholder in Textarea', () => {
      const placeholder = getAttribute('#textarea', 'placeholder');
      expect(placeholder).to.equal('');
    });
  });

  describe('Change value into props', () => {
    cleanComponent();

    it('View ambient to container', async () => {
      el.ambient = 'dark';
      await el.updateComplete;
      const container = getAttribute('#container', 'class');
      expect(container).to.equal('dark');
    });

    it('View label text in Dom', async () => {
      el.label = 'CUSTOM TEXT';
      el.withLabel = true;
      await el.updateComplete;
      const labelText = el.shadowRoot?.querySelector('#label')?.textContent;
      expect(labelText).to.equal('CUSTOM TEXT');
    });

    it('Get value in textarea from DOM', async () => {
      el.value = 'CUSTOM TEXT';
      await el.updateComplete;
      const value = el.shadowRoot?.querySelector('#textarea')?.textContent;
      expect(value).to.equal('CUSTOM TEXT');
    });

    it('Textarea size', async () => {
      el.width = 300;
      el.height = 200;
      await el.updateComplete;
      const size = getAttribute('#textarea', 'style');
      expect(size).to.equal('width: 300rem; height: 200rem;');
    });

    it('Placeholder in Textarea', async () => {
      el.placeholder = 'CUSTOM PLACEHOLDER';
      await el.updateComplete;
      const placeholder = getAttribute('#textarea', 'placeholder');
      expect(placeholder).to.equal('CUSTOM PLACEHOLDER');
    });
  });
});
