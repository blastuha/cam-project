import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export const SIDEBAR_MENU = [
  { title: 'Главная', logo: HomeIcon, path: '/' },
  { title: 'Список сотрудников', logo: PeopleAltIcon, path: '/employees' },
  { title: 'Все видео', logo: OndemandVideoIcon, path: '/all_videos' },
  { title: 'Выйти', logo: LogoutIcon, path: '' },
];
