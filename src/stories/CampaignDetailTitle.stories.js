import CampaignDetailTitle from '../components/CampaignDetailTitle.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'CampaignDetail/Title',
  component: CampaignDetailTitle,
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
  components: { CampaignDetailTitle },
  setup() {
    return { ...args };
  },
  template: '<CampaignDetailTitle :text="text" />',
});

export const Title = Template.bind({});
Title.args = {
  text: '無題のキャンペーン001',
};
