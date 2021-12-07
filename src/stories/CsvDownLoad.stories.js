import CsvDownLoadContent from '../components/CsvDownLoadContent.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'CsvDownLoad/Content',
  component: CsvDownLoadContent,
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
  components: { CsvDownLoadContent },
  setup() {
    return { ...args };
  },
  template: '<CsvDownLoadContent />',
});

export const Content  = Template.bind({});
