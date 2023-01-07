import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';

const dashboardHeaderProps: DashboardHeaderProps = {
  userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
  userName: 'User',
};
export function DashboardPage() {
  return <DashboardHeader {...dashboardHeaderProps} />;
}
