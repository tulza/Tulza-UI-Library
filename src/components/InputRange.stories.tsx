import { StoryObj, Meta } from "@storybook/react";

import InputRange from "./InputRange";

const meta = {
  title: "InputRange",
  component: InputRange,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof InputRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "test",
    range: { min: -100, max: 100 },
  },
};
