import { addons } from '@storybook/addons';
import theme from './theme';
import favicon from '../stories/assets/logo.png';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: theme,
});