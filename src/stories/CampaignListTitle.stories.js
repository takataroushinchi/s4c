import CampaignListTitle from '../components/CampaignListTitle.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'Home/CampaignListTitle',
  component: CampaignListTitle,
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
  components: { CampaignListTitle },
  setup() {
    return { ...args };
  },
  template: '<CampaignListTitle :text="text" />',
});

export const Title = Template.bind({});
Title.args = {
  text: 'キャンペーン一覧',
};
