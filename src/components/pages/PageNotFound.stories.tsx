import { StoryObj, Meta } from "@storybook/react";
import "@styles/styles.css";
import "@styles/fonts.css";
import PageNotFound from "./PageNotFound";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Pages/PageNotFound",
  component: PageNotFound,
  render: () => (
    <BrowserRouter>
      {/* pageNotfound has a <Link/> component so it needs browserRouter */}
      <PageNotFound />
    </BrowserRouter>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof PageNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page_Not_Found: Story = {
  args: {},
};
