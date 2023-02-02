import { MenuItemInterface } from '../types/app.types';

export const menuItems: MenuItemInterface[] = [
  {
    name: 'Animation101',
    icon: 'view-in-ar',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation102',
    icon: 'animation',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-on',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'info',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'list-alt',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh',
    component: 'PullToRefreshScreen'
  }
];
