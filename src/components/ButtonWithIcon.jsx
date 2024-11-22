
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const ButtonWithIcon = () => (
  <Button type="primary" icon={<DownloadOutlined />} size="large">
    Download
  </Button>
);

export default ButtonWithIcon;
