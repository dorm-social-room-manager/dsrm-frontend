import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import { DashboardBody } from '../components/DashboardBody/DashnoardBody';
import { DashboardItem } from '../components/DashboardCard/DashboardCard.types';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import PersonIcon from '@mui/icons-material/Person';

const ADMIN_ITEMS: DashboardItem[] = [
  {
    icon: PersonIcon,
    title: 'Users',
    url: '/register',
  },
  {
    icon: InsertPhotoSharpIcon,
    title: 'Rooms',
    url: '/',
  },
  {
    icon: FeaturedPlayListSharpIcon,
    title: 'Reservations',
    url: '/',
  },
  {
    icon: AddPhotoAlternateSharpIcon,
    title: 'Add room',
    url: '/',
  },
];

export function DashboardPage() {
  return <DashboardBody items={ADMIN_ITEMS} />;
}
