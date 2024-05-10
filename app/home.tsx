import { FaSearch, FaCog, FaBell , FaEllipsisV ,FaRegCommentDots   } from 'react-icons/fa';
import data from './Data/data.json';
import Image from 'next/image';
import user from '../public/Images/useroneimg.svg'
import { CiHeart } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { BiBookmarkMinus } from "react-icons/bi";


const Home = () => {
  const storyData = data.storyData; 
  const postData = data.postData

  return (
    <div>
      <div className="relative top-5 left-7 flex justify-between" style={{ width: 'calc(120% - 6px)' }}>
        <div>
          <input
            type="text"
            className="w-full pl-14 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
            placeholder="Search anything.."
            style={{ width: 'calc(190% - 6px)' }}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FaSearch className="h-6 w-6 font-thin text-slate-900" />
          </div>
        </div>
        <div className='flex gap-7 pt-4'>
          <div>
            <FaBell className="h-6 w-6 text-slate-400" />
          </div>
          <div>
            <FaCog className="h-6 w-6 text-slate-400" />
          </div>
        </div>
      </div>
      <div className="border border-gray-300 mt-10 ml-7" style={{ width: 'calc(120% - 6px)' }}></div>
      <div className='flex ml-7 mt-5 gap-6'>
        {storyData.map(story => (
          <div key={story.id} className='flex gap-2'>
            <div className='  w-32  h-40  rounded-md'>
              <Image src={story.storyimage} alt={story.name} width={220} height={220} className='border-4 border-blue-500  rounded-2xl' />
             <div className='flex -m-7 font-inter text-sm  font-normal text-slate-50  pl-9 gap-1'>
                <div>
                <Image src={story.image} alt='image' width={23} height={23} className='-mt-2 ml-1'/>
                </div>

            <div>
              <p className='-mt-2' >{story.name}</p>  

            </div>

              
             </div>
             
            </div>
          </div>
        ))}
      </div>
      <div className='  h-20  mt-8 ml-8 rounded-lg shadow-md flex gap-3 '
      style={{ width: 'calc(100% - 6px)' }}
      >
<div className=' pl-7 pt-5'>
<Image src={user} alt='user'/>
</div>
<div className='pt-4'>
<input
            type="text"
            className=" pl-4 pr-4 py-3  bg-gray-100 rounded-lg focus:outline-none"
            placeholder="What do you want to share, Barry?"
            style={{ width: 'calc(200% - 6px)' }}
          />
</div>
      </div>
      <div className='  h-auto  pb-10 mt-8 ml-8  rounded-lg shadow-md '
        style={{ width: 'calc(100% - 6px)' }}
      >

<div >
        {postData.map(post => (
          <div key={post.id}  >
            <div className='flex gap-4'>
            <div className='ml-5 mt-4'>
            <Image src={post.image} alt='postimg' width={45} height={45}/>
           </div>
           <div className='flex justify-between w-full'>
           <div className='mt-3 '>
            <h2 className='font-inter  font-semibold text-slate-800'>{post.name}</h2>
            <p className=' font-inter  text-slate-400'>{post.activeseen}</p>

           </div>
           <div className='mt-6 mr-5 '>
           <FaEllipsisV  className='h-6 text-gray-400'/>

           </div>
           </div>
           <div>
           </div>
            </div>
           
            <div className='mt-5 ml-5  flex gap-5'>

                <Image src={post.galleryone} alt='gallery' width={270} height={250}/>
                <div>
                <Image src={post.gallerytwo} alt='gallery' width={290} height={280}/>
                <Image src={post.gallerythree} alt='gallery' width={290} height={280} className='pt-5'/>

                </div>
            </div>
            <div>
                <p className='pl-5 pt-4 font-inter text-base  font-medium text-slate-700'>{post.description}</p>
                <div className="border border-gray-300 mt-3 ml-5" style={{ width: 'calc(90% - 6px)' }}></div>
            </div>
            <div className='ml-4 mt-3 '>
                <div className='flex gap-7'>
                    <div className='flex gap-2  w-16 p-1  ml-2 bg-slate-100  rounded-2xl pl-2'>
                    <div >{post.likes} </div>
                    <div><CiHeart className='text-2xl ' /></div>
                    </div>
<FaRegCommentDots className='text-2xl text-gray-300 mt-1  ' />
<TbLocationShare  className='text-2xl text-gray-300 mt-1' />

<BiBookmarkMinus className='text-2xl text-gray-300   ml-80 mt-1 '/>

 </div> 

            </div>
           </div>
        ))}
      </div>

      </div> 
    </div>
  );
};

export default Home;