import { DashboardBody } from '../components/DashboardBody/DashnoardBody';
import { DashboardItem } from '../components/DashboardCard/DashboardCard.types';
import MenuIcon from '@mui/icons-material/Menu';

const TEST: DashboardItem[] = [
  {
    icon: MenuIcon,
    title: 'test',
    url: '/register',
  },
  {
    icon: MenuIcon,
    title: 'test2',
    url: '/',
  },
  {
    icon: MenuIcon,
    title: 'test3',
    url: '/',
  },
  {
    icon: MenuIcon,
    title: 'test4',
    url: '/',
  },
  {
    icon: MenuIcon,
    title: 'test5',
    url: '/',
  },
];

export function DashboardPage() {
  return <DashboardBody items={TEST} />;
}
