import { StoryObj, Meta } from "@storybook/react";
import "@styles/styles.css";
import "@styles/fonts.css";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Pages/MainPage",
  component: Main,
  render: () => (
    <BrowserRouter>
      {/* pageNotfound has a <Link/> component so it needs browserRouter */}
      <div className="flex h-[100vh] w-[100vw]">
        <Main />
      </div>
    </BrowserRouter>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main_page: Story = {
  args: {},
};
