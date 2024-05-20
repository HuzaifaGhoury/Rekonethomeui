// "use client"
// import React, { useState } from 'react';
// import { Input, Drawer } from 'antd';
// import { SearchOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
// import { FaEllipsisV, FaRegCommentDots } from 'react-icons/fa';
// import Image from 'next/image';
// import user from '../../public/Images/homeimages/useroneimg.svg';
// import { CiHeart } from 'react-icons/ci';
// import { TbLocationShare } from 'react-icons/tb';
// import data from '../../shared/JSON/data.json';
// import DefaultLayout from '@/components/defaultLayout/DefaultLayout';
// import Commentcontent from '../../components/commentContent/commentcontent';

// const Page = () => {
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);

//   const showDrawer = () => {
//     setIsDrawerVisible(true);
//   };

//   const onCloseDrawer = () => {
//     setIsDrawerVisible(false);
//   };

//   const storyData = data.storyData;
//   const postData = data.postData;

//   return (
//     <DefaultLayout>
//       <div className='w-full'>
//         <div className="flex">
//           <div className="w-full">
//             <Input
//               className="p-3 bg-slate-50 font-medium text-base border-none text-slate-700"
//               prefix={<SearchOutlined className="site-form-item-icon" />}
//               placeholder="Search anything..."
//             />
//           </div>
//           <div className="flex gap-4 ml-4">
//             <BellOutlined className="text-2xl text-slate-400" />
//             <SettingOutlined className="text-2xl text-slate-400" />
//           </div>
//         </div>
//         <div className="border border-gray-300 mt-7"></div>
//         <div className="flex mt-5 gap-6">
//           {storyData.map((story) => (
//             <div key={story.id} className="flex gap-2">
//               <div className="w-32 h-40 rounded-md">
//                 <Image
//                   src={story.storyimage}
//                   alt={story.name}
//                   width={220}
//                   height={220}
//                   className="border-4 border-blue-500 rounded-2xl"
//                 />
//                 <div className="flex -m-7 font-inter text-sm font-normal text-slate-50 pl-9 gap-1">
//                   <div>
//                     <Image src={story.image} alt="image" width={23} height={23} className="-mt-2 ml-1" />
//                   </div>

//                   <div>
//                     <p className="-mt-2">{story.name}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="w-full mt-8 h-20 rounded-lg shadow-md flex gap-3">
//           <div className="pl-6 pt-4">
//             <Image src={user} alt="user" width={50} height={50} />
//           </div>
//           <div className="flex-grow pt-4">
//             <Input
//               type="text"
//               className="pl-4 pr-4 py-3 bg-slate-100 font-medium text-base border-none rounded-lg focus:outline-none text-slate-900"
//               placeholder="What do you want to share, Barry?"
//               style={{ width: 'calc(100% - 70px)' }}
//             />
//           </div>
//         </div>

//         <div className='h-auto pb-7 mt-8 rounded-lg shadow-md'>
//           {postData.map(post => (
//             <div key={post.id}>
//               <div className='flex gap-4'>
//                 <div className='ml-5 mt-4'>
//                   <Image src={post.image} alt='postimg' width={45} height={45}/>
//                 </div>
//                 <div className='flex justify-between w-full'>
//                   <div className='mt-3 '>
//                     <h2 className='font-inter font-semibold text-slate-800'>{post.name}</h2>
//                     <p className='font-inter text-slate-400'>{post.activeseen}</p>
//                   </div>
//                   <div className='mt-6 mr-5 '>
//                     <FaEllipsisV className='h-6 text-gray-400'/>
//                   </div>
//                 </div>
//               </div>

//               <div className='flex gap-5 w-full pl-4 pt-4'>
//                 <Image src={post.galleryone} alt='gallery' width={250} height={250} className='max-w-full h-auto' />
//                 <div className='w-full'>
//                   <Image src={post.gallerytwo} alt='gallery' width={270} height={280} className='max-w-full h-auto' />
//                   <Image src={post.gallerythree} alt='gallery' width={270} height={280} className='max-w-full h-auto pt-5' />
//                 </div>
//               </div>
//               <div>
//                 <p className='pl-5 pt-4 font-inter text-base font-medium text-slate-700'>{post.description}</p>
//                 <div className="border border-gray-300 mt-3 ml-5"></div>
//               </div>
//               <div className='ml-4 mt-3 '>
//                 <div className='flex gap-7'>
//                   <div className='flex gap-2 w-16 p-1 ml-2 bg-slate-100 rounded-2xl pl-2'>
//                     <div>{post.likes}</div>
//                     <div><CiHeart className='text-2xl '/></div>
//                   </div>
//                   <FaRegCommentDots className='text-2xl text-gray-300 mt-1 cursor-pointer' onClick={showDrawer} />
//                   <TbLocationShare className='text-2xl text-gray-300 mt-1' />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <Drawer
//           title="Messages"
//           placement="right"
//           closable={true}
//           onClose={onCloseDrawer}
//           visible={isDrawerVisible}
//           width={400}
//           className="absolute top-0 right-0 h-full overflow-auto z-50"
//         >
//           <Commentcontent/>
//         </Drawer>

//       </div>
//     </DefaultLayout>
//   )
// }

// export default Page;
