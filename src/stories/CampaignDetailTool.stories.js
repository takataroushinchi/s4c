import CampaignDetailTool from '../components/CampaignDetailTool.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'CampaignDetail/Tool',
  component: CampaignDetailTool,
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
  components: { CampaignDetailTool },
  setup() {
    return { ...args };
  },
  template: '<CampaignDetailTool />',
});

export const Tool = Template.bind({});
