import { html, fixture, expect } from '@open-wc/testing';

import { R3Textarea } from '../src/R3Textarea.js';
import '../r3-textarea.js';

describe('R3Textarea', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<R3Textarea>(html`<r3-textarea></r3-textarea>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<R3Textarea>(html`<r3-textarea></r3-textarea>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<R3Textarea>(html`<r3-textarea title="attribute title"></r3-textarea>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<R3Textarea>(html`<r3-textarea></r3-textarea>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
