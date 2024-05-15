// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// // import Home from '../home';
// // import Profile from '../profile'; // Import your Profile component
// import data from '../Data/data.json';
// import logo from '../../public/Images/png earth 1.svg';
// import user from '../../public/Images/useroneimg.svg';
// // import Profile from '../profile-page/page'
// const { Header, Sider, Content } = Layout;

// interface MenuItemProps {
//     icon: JSX.Element;
//     text: string;
//     onClick?: () => void; 
// }
 
// const Sidebar: React.FC = () => {   
//     const onlineFriends = data.onlineFriends;
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const [selectedMenuItem, setSelectedMenuItem] = useState('home'); // Track the selected menu item

//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     const handleMenuItemClick = (menuItem: string) => {
//         setSelectedMenuItem(menuItem);
//     };

//     // Render the content based on the selected menu item
//     const renderContent = () => {
//         switch (selectedMenuItem) {
//             case 'home':
//                 return <Home />;
//             // case 'profile':
//             //     return <Profile/>;
//             // Add cases for other menu items if needed
//             default:
//                 return <Home />;
//         }
//     };

//     return (
//         <div className="flex">
//             <div className={` top-0 left-0 w-60 h-auto bg-gray-100 z-50 ${isDrawerOpen ? 'md:hidden' : 'hidden md:block'}`}>
//                 {isDrawerOpen && (
//                     <div className="flex justify-end p-4">
//                         <FaTimes onClick={toggleDrawer} className="cursor-pointer" />
//                     </div>
//                 )}
//                 <div className='w-60 h-screen bg-gray-100'>
//                     <div>
//                         <Image src={logo} alt='logo' className='ml-9' />
//                     </div>
//                     <div className='flex font-inter font-bold text-sm text-slate-900'>
//                         <div className='pl-6'>
//                             <Image src={user} alt='logo' />
//                         </div>
//                         <div className='pl-2 pt-3'>Welcome Barry !</div>
//                     </div>
//                     <div className='flex flex-col gap-7 pt-8 pl-8 font-inter font-medium text-slate-400'>
//                         <MenuItem icon={<FaHome size={20} />} text="Home" onClick={() => handleMenuItemClick('home')} />
//                         <MenuItem icon={<FaUser size={20} />} text="Profile" onClick={() => handleMenuItemClick('profile')} />
//                         <MenuItem icon={<FaEnvelope size={20} />} text="Message" />
//                          <MenuItem icon={<FaUsers size={20} />} text="Group" />
//                          <MenuItem icon={<FaGlobe size={20} />} text="Explore" />

//                     </div>
//                     <div className='pl-5 pt-9'>
//                         <div className='pb-7 flex font-inter font-bold text-slate-900'>Online Friends (5)</div>
//                         <div className='flex gap-5 flex-col'>
//                             {onlineFriends.map(friend => (
//                                 <div key={friend.id} className='flex gap-2'>
//                                     <div>
//                                         <Image src={friend.image} alt={friend.name} width={35} height={35} />
//                                     </div>
//                                     <div>
//                                         <p className='pt-2 flex font-inter text-sm font-medium text-slate-400'>{friend.name}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <button onClick={toggleDrawer} className={`block md:hidden fixed top-5 left-5 z-50 ${isDrawerOpen ? 'hidden' : ''}`}>
//                 <FaGlobe size={20} />
//             </button>

//             <div>
//                 {renderContent()}
//             </div>
//         </div>
//     );
// };

// const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => (
//     <div className='flex gap-4' onClick={onClick}>
//         <div>{icon}</div>
//         <div>{text}</div>
//     </div>
// );

// export default Sidebar; 