// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import Plugin from '../stories/assets/logo.png';

export default create({
  base: 'light',
  brandTitle: '混沌',
  brandImage:  Plugin,
  appBg: 'white',
  appBorderRadius: 4,
  
});