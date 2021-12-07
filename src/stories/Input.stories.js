import SsssInput from './components/Input.vue';

const textData = require('./notes/input.md')
const markdown = textData.default

export default {
  title: 'Example/Input',
  component: SsssInput,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['text', 'number', 'search', 'date', 'time'],
    },
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: "centered",
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return notes.markdown;
        }
        return null;
      }
    },
    notes: { markdown }
  }
};

const Template = (args) => ({
  components: { SsssInput },
  setup() {
    return { args };
  },
  template: '<ssss-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  as: 'text',
};

export const Invalid = Template.bind({});
Invalid.args = {
  as: 'number',
  invalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  as: 'search',
  disabled: true,
};
