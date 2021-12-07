import SsssTabNavigation from '../components/TabNavigation.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'Home/TabNavigation',
  component: SsssTabNavigation,
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
  components: { SsssTabNavigation },
  setup() {
    return { ...args };
  },
  template: '<SsssTabNavigation />',
});

export const TabNavigation = Template.bind({});
