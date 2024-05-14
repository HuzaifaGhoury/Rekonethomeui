"use client"
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FaHome, FaUser, FaEnvelope, FaUsers, FaGlobe, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Home from '../home';
import Profile from '../profile'; // Import your Profile component
import data from '../Data/data.json';
import logo from '../../public/Images/png earth 1.svg';
import user from '../../public/Images/useroneimg.svg';

const { Header, Sider, Content } = Layout;

interface MenuItemProps {
    icon: JSX.Element;
    text: string;
    onClick?: () => void; // Define the type for onClick
}

const Sidebar: React.FC = () => {
    const onlineFriends = data.onlineFriends;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('home'); // Track the selected menu item

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleMenuItemClick = (menuItem: string) => {
        setSelectedMenuItem(menuItem);
    };

    // Render the content based on the selected menu item
    const renderContent = () => {
        switch (selectedMenuItem) {
            case 'home':
                return <Home />;
            case 'profile':
                return <Profile />;
            // Add cases for other menu items if needed
            default:
                return <Home />;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={isDrawerOpen} onCollapse={toggleDrawer}>
                <div className='logo'>
                    <Image src={logo} alt='logo' className='ml-9' />
                </div>
                <Menu  defaultSelectedKeys={['home']} mode="inline">
                    <MenuItem icon={<FaHome size={20} />} text="Home" onClick={() => handleMenuItemClick('home')} />
                    <MenuItem icon={<FaUser size={20} />} text="Profile" onClick={() => handleMenuItemClick('profile')} />
                    <MenuItem icon={<FaEnvelope size={20} />} text="Message" />
                    <MenuItem icon={<FaUsers size={20} />} text="Group" />
                    <MenuItem icon={<FaGlobe size={20} />} text="Explore" />
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <FaTimes onClick={toggleDrawer} className="cursor-pointer" />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                    {renderContent()}
                </Content>
            </Layout>
        </Layout>
    );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => (
    <Menu.Item key={text} icon={icon} onClick={onClick}>
        {text}
    </Menu.Item>
);

export default Sidebar;