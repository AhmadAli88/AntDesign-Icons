import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const MenuWithIcons = () => (
  <Menu mode='horizontal'>
    <Menu.Item key='home' icon={<HomeOutlined />}>
      Home
    </Menu.Item>
    <Menu.Item key='profile' icon={<UserOutlined />}>
      Profile
    </Menu.Item>
    <Menu.Item key='settings' icon={<SettingOutlined />}>
      Settings
    </Menu.Item>
  </Menu>
);

export default MenuWithIcons;
