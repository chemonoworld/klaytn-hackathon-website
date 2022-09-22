import './layout.scss';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import WalletConnection from '../WalletConnection';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <WalletConnection />
    </div>
  );
};

export default Layout;
