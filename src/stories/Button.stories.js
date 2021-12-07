import SsssButton from './components/Button.vue';
import { Download, ChartLine } from '@icon-park/vue-next';

const textData = require('./notes/button.md')
const markdown = textData.default

export default {
  title: 'Example/Button',
  component: SsssButton,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'a', 'submit'],
    },
    variants: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'element', 'download', 'delete', 'tab', 'status', 'valid', 'invalid', 'archive'],
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
  components: { SsssButton },
  setup() {
    const handleMethod = () => {
      alert('@button-click');
    }
    return { args, handleMethod };
  },
  template: '<ssss-button v-bind="args" @button-click="handleMethod" />',
});

export const Primary = Template.bind({});
Primary.args = {
  variants: 'primary',
  as: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  as: 'button',
};

export const Element = Template.bind({});
Element.args = {
  variants: 'element',
  as: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variants: 'element',
  disabled: true,
  as: 'button',
};

export const Valid = Template.bind({});
Valid.args = {
  variants: 'valid',
  as: 'button',
};

const SlotTemplate01 = (args) => ({
  components: { SsssButton, Download },
  setup() {
    const handleMethod = () => {
      alert('ダウンロード開始');
    }
    return { args, handleMethod };
  },
  template: '<ssss-button v-bind="args" @button-click="handleMethod"><download theme="filled"/><span>ダウンロードボタン</span></ssss-button>',
});

export const SlotDownload = SlotTemplate01.bind({});
SlotDownload.args = {
  variants: 'download',
  as: 'a',
};

const SlotTemplate02 = (args) => ({
  components: { SsssButton, ChartLine },
  setup() {
    const handleMethod = () => {
      alert('リポート表示');
    }
    return { args, handleMethod };
  },
  template: '<ssss-button v-bind="args" @button-click="handleMethod"><chart-line theme="filled"/></ssss-button>',
});

export const SlotReport = SlotTemplate02.bind({});
SlotReport.args = {
  variants: 'element',
  as: 'a',
};