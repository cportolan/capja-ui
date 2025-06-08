import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Aceptar',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancelar',
    variant: 'secondary',
  },
};
export const Disabled: Story = {
  args: {
    children: 'Enviar formulario',
    variant: 'primary',
    disabled: true,
  },
};
export const Loading: Story = {
  args: {
    children: 'Enviar',
    variant: 'primary',
    loading: true,
  },
};