import Flex from '../components/layout/Flex.vue';
import { FLEX_DIRECTION } from '../constants';

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: [FLEX_DIRECTION.row, FLEX_DIRECTION.column],
      defaultValue: FLEX_DIRECTION.row,
    },
    gap: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
      defaultValue: 10,
    },
    paddingDirection: {
      control: { type: 'select' },
      options: ['All', 'Start', 'End', 'Top', 'Bottom', 'Horizontal', 'Vertical'],
      defaultValue: 'All',
    },
    padding: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
      defaultValue: 10,
    },
  },
};

const Template = (args) => ({
  components: { Flex },
  setup: () => {
    const params = {
      direction: args.direction,
      gap: args.gap,
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    };

    switch (args.paddingDirection) {
      case 'Start':
        params.padding.left = args.padding;
        break;
      case 'End':
        params.padding.right = args.padding;
        break;
      case 'Top':
        params.padding.top = args.padding;
        break;
      case 'Bottom':
        params.padding.bottom = args.padding;
        break;
      case 'Horizontal':
        params.padding.right = args.padding;
        params.padding.left = args.padding;
        break;
      case 'Vertical':
        params.padding.top = args.padding;
        params.padding.bottom = args.padding;
        break;
      case 'All':
        params.padding.top = args.padding;
        params.padding.right = args.padding;
        params.padding.bottom = args.padding;
        params.padding.left = args.padding;
    }

    return {
      params
    };
  },
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story /></div>' })
  ],
  template: `
    <Flex v-bind="params"> 
      <div style="height: 200px; width: 200px; background-color: rgba(255, 0, 255, 0.15);"></div>
      <div style="height: 200px; width: 200px; background-color: rgba(255, 0, 255, 0.15);"></div>
    </Flex>
  `
});

export const FlexLayout = Template.bind({});
