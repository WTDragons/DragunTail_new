import { ToolFilled, UserOutlined, BellFilled, PictureFilled, ShopFilled} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: '關於也龍',
    key: 'about',
    icon: <UserOutlined />,
  },
  {
    label: '公告欄',
    key: 'information',
    icon: <BellFilled />,
  },
  {
    label: '藝術畫廊',
    key: 'gallery',
    icon: <PictureFilled />,
  },  
  {
    label: '像素委託',
    key: 'commission',
    icon: <ShopFilled />,
  },
  {
    label: '龍與尾巴亭',
    key: 'draguntail',
    icon: <ToolFilled />,
    disabled: true,
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;