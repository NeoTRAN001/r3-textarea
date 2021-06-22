/* eslint  lit/attribute-value-entities: "off" */
import { html, TemplateResult } from 'lit-html';
import '../r3-textarea.js';

export default {
  title: 'R3Textarea',
  component: 'r3-textarea',
  argTypes: {
    ambient: { control: 'ambient' },
    description: { control: 'description' },
    descriptionType: { control: 'descriptionType' },
    label: { control: 'label' },
    placeholder: { control: 'placeholder' },
    readOnly: { control: 'readOnly' },
    required: { control: 'required' },
    size: { control: 'size' },
    value: { control: 'value' },
    withDescription: { control: 'withDescription' },
    withLabel: { control: 'withLabel' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  ambient?: String;
  description?: String;
  descriptionType?: String;
  label?: String;
  placeholder?: String;
  readOnly?: Boolean;
  required?: Boolean;
  size?: Object;
  value?: String;
  withDescription?: Boolean;
  withLabel?: Boolean;
}

const Template: Story<ArgTypes> = ({
  ambient = 'light',
  description = 'Deafult description',
  descriptionType = 'info',
  label = 'Default Text',
  placeholder = '',
  readOnly = false,
  required = false,
  size = { width: 20, height: 10 },
  value = '',
  withDescription = false,
  withLabel = false,
}: ArgTypes) => html`
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap"
    rel="stylesheet"
  />
  <r3-textarea
    ambient="${ambient}"
    description="${description}"
    description-type="${descriptionType}"
    label="${label}"
    placeholder="${placeholder}"
    ?read-only="${readOnly}"
    ?required="${required}"
    .size=${size}
    value="${value}"
    ?with-description="${withDescription}"
    ?with-label="${withLabel}"
  >
  </r3-textarea>
`;

export const Regular = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  withLabel: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  withDescription: true,
};

export const WithDescriptionType = Template.bind({});
WithDescriptionType.args = {
  withDescription: true,
  descriptionType: 'warning',
};

export const WithLabelDescription = Template.bind({});
WithLabelDescription.args = {
  withLabel: true,
  withDescription: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  withLabel: true,
  withDescription: true,
  placeholder: 'Your message',
};

export const WithValueContent = Template.bind({});
WithValueContent.args = {
  withLabel: true,
  withDescription: true,
  value: 'Hello World',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  withLabel: true,
  withDescription: true,
  value: 'Hello World',
  size: { width: 12, height: 12 },
};

export const CustomLabelDescription = Template.bind({});
CustomLabelDescription.args = {
  withLabel: true,
  withDescription: true,
  label: 'Message:',
  description: 'Hello world',
  placeholder: 'Your message',
  size: { width: 25, height: 12 },
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  withLabel: true,
  withDescription: true,
  descriptionType: 'alert',
  value: 'Hello World',
  size: { width: 12, height: 12 },
  ambient: 'dark',
};
