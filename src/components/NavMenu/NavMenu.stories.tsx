import React from "react";
import { Meta, Story } from "@storybook/react";

import NavMenu from ".";

export default {
  title: "Components/NavMenu",
  component: NavMenu,
} as Meta;

const Template: Story = args => <NavMenu {...args} />;

export const Default = Template.bind({});
