import { BUTTON_TYPE } from '../constants.js';
import { buttons } from '../components';

export default {
  title: 'Buttons/Button',
  component: buttons.Button,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [BUTTON_TYPE.basic, BUTTON_TYPE.positive, BUTTON_TYPE.negative],
      defaultValue: BUTTON_TYPE.basic,
    },
  }
};

const Template = (args) => ({
  components: {
    'basic-button': buttons.Button,
  },
  setup: () => {
    return {
      args
    };
  },
  template: `
    <basic-button v-bind="props">Test Button</basic-button>
  `
});

export const Button = Template.bind({});
Button.args = {
  type: BUTTON_TYPE.basic,
};
