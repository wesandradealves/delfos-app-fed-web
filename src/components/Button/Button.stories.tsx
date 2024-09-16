import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './index'; // Path to your component
import { ThemeProvider } from 'styled-components';
import { theme } from '@/app/layout'; 

// Meta configuration for Storybook
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    tag: {
      control: 'select',
      options: ['button', 'a'],
    },
    href: {
      control: 'text',
      if: { arg: 'tag', eq: 'a' }, // Only show 'href' control if 'tag' is 'a'
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

// Template to create stories
const Template: StoryObj<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Button',
  tag: 'button',
  className: '',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Primary Button',
  tag: 'button',
  className: 'primary',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Link Button',
  tag: 'a',
  href: '#',
};
