import CommonTitle from '../components/CommonTitle.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'Components/CommonTitle',
  component: CommonTitle,
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
  components: { CommonTitle },
  setup() {
    return { ...args };
  },
  template: '<common-title :text="text" />',
});

export const Title01 = Template.bind({});
Title01.args = {
  text: '共通タイトルUI',
};

export const Title02 = Template.bind({});
Title02.args = {
  text: '共通タイトルタイトル',
};
