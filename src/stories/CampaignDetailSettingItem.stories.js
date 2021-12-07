import CampaignDetailSettingItem from '../components/CampaignDetailSettingItem.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'CampaignDetail/SettingItem',
  component: CampaignDetailSettingItem,
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
  components: { CampaignDetailSettingItem },
  setup() {
    return { ...args };
  },
  template: '<CampaignDetailSettingItem />',
});

export const Item = Template.bind({});
