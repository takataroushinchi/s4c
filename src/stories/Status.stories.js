import SsssStatus from './components/Status.vue';

const textData = require('./notes/status.md')
const markdown = textData.default

export default {
  title: 'Example/Status',
  component: SsssStatus,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'a', 'submit'],
    },
    variants: {
      control: { type: 'select' },
      options: ['valid', 'invalid', 'archive'],
    },
    backgroundColor: { control: 'color' },
    onClick: {},
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
  components: { SsssStatus },
  setup() {
    const handleMethod = () => {
      alert('@status-click');
    }
    return { args, handleMethod };
  },
  template: '<ssss-status v-bind="args" @status-click="handleMethod" />',
});

export const Valid = Template.bind({});
Valid.args = {
  variants: 'valid',
  as: 'button',
};

export const Invalid = Template.bind({});
Invalid.args = {
  variants: 'invalid',
  as: 'button',
  text: '一時停止',
};

export const Archive = Template.bind({});
Archive.args = {
  variants: 'archive',
  as: 'button',
  text: 'アーカイブ',
};

export const IsCaution = Template.bind({});
IsCaution.args = {
  variants: 'valid',
  isCaution: true,
  as: 'button',
};
