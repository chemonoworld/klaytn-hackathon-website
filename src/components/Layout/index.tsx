import './layout.scss';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import WalletConnection from '../WalletConnection';
import Modal from '../Modal';
const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <WalletConnection />
      <Modal />
    </div>
  );
};

export default Layout;
