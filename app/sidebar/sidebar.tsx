    import React from 'react';
    import Image from 'next/image';
    import logo from '../../public/Images/png earth 1.svg'
    import user from '../../public/Images/useroneimg.svg'
    import { FaHome, FaUser, FaEnvelope, FaUsers, FaGlobe } from 'react-icons/fa';
    import data from '../Data/data.json'
import Home from '../home'

    const Sidebar = () => {
        const onlineFriends = data.onlineFriends;

    return (
        <div className='flex'>
        <div className=' w-60  h-auto  bg-gray-100'>
        <div>
        <Image
        src={logo} alt='logo'
        className=' ml-9'
            />
        </div>
        <div className=' flex font-inter  font-bold  text-sm text-slate-900'>
            <div className=' pl-6'>
    <Image src={user} alt='logo'/>
            </div>
            <div className=' pl-2 pt-3'>Welcome Barry !</div>
        </div>
        <div className=' flex flex-col gap-7 pt-8 pl-8 font-inter  font-medium text-slate-400'>
            <div className=' flex gap-4'>
    <div><FaHome size={20}/></div>
            <div> Home</div>  
            </div>
            <div className=' flex gap-4'>
    <div>  <FaUser size={20} /></div>
            <div> Profile</div>
            </div>
            <div className=' flex gap-4'>
    <div><FaEnvelope size={20} /></div>
            <div> Message</div>
            </div> 
    <div className=' flex gap-4'>
    <div><FaUsers size={20} /></div>
    <div>  Group</div>
    </div>
    <div className='flex gap-4'>
        <div> <FaGlobe size={20}  /></div>
    <div> Explore</div>
    </div>
        </div>
        <div className=' pl-5 pt-9'>
            <div className=' pb-7 flex font-inter  font-bold  text-slate-900'>Online Friends (5)</div>
            <div  className='flex gap-5 flex-col'>
        {onlineFriends.map(friend => (
            <div key={friend.id} className='flex  gap-2'>
                <div>
                <Image src={friend.image} alt={friend.name}  width={35}
            height={35}/>
                </div>
                        <div>  
            <p className=' pt-2 flex font-inter text-sm  font-medium text-slate-400'>{friend.name}</p>
            </div>
            
            </div>
        ))}
        </div>
        </div>
        </div>
        <div>
<Home/>
        </div>
        
        </div>
    );
    };

    export default Sidebar;