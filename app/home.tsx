import { FaSearch, FaCog, FaBell, FaEllipsisV, FaRegCommentDots } from 'react-icons/fa';
import data from './Data/data.json';
import Image from 'next/image';
import user from '../public/Images/useroneimg.svg';
import { CiHeart } from "react-icons/ci";
import { TbLocationShare } from "react-icons/tb";
import { BiBookmarkMinus } from "react-icons/bi";

const Home = () => {
  const storyData = data.storyData;
  const postData = data.postData;

  return (
    <div className="container w-screen px-4 border border-red-950">
      <div className="relative flex justify-between items-center mt-5">
        <div className="flex-grow">
          <input
            type="text"
            className="w-full pl-14 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
            placeholder="Search anything.."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FaSearch className="h-6 w-6 font-thin text-slate-900" />
          </div>
        </div>
        <div className="flex gap-5 pt-4">
          <FaBell className="h-6 w-6 text-slate-400" />
          <FaCog className="h-6 w-6 text-slate-400" />
        </div>
      </div>
      <div className="border border-gray-300 mt-10"></div>
      <div className="flex  md:flex gap-6 mt-5">
        {storyData.map(story => (
          <div key={story.id} className="flex flex-col gap-2">
            <div className="w-full h-40 rounded-md">
              <Image src={story.storyimage} alt={story.name} width={220} height={220} className="border-4 border-blue-500 rounded-2xl" />
              <div className="flex -m-7 font-inter text-sm font-normal text-slate-50 pl-9 gap-1">
                <div>
                  <Image src={story.image} alt="image" width={23} height={23} className="-mt-2 ml-1" />
                </div>
                <div>
                  <p className="-mt-2">{story.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 mt-8 w-auto">
    <div className=" shadow-lg  rounded-md h-16 mt-28 ">
          <div className="flex items-center gap-3  ">
            <div className="pl-7 ">
              <Image src={user} alt="user" width={49} height={50} />
            </div>
            <div className="flex-grow pt-2  bg-gray-100 rounded-lg">
              <input
                type="text"
                className=" pl-4 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none w-full"
                placeholder="What do you want to share, Barry?"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          {postData.map(post => (
            <div key={post.id} className="border border-gray-300 rounded-lg shadow-md mb-8">
              <div className="flex gap-4 p-4">
                <div className="flex-shrink-0">
                  <Image src={post.image} alt="postimg" width={45} height={45} />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-semibold text-slate-800">{post.name}</h2>
                      <p className="text-slate-400">{post.activeseen}</p>
                    </div>
                    <div className="ml-auto">
                      <FaEllipsisV className="h-6 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex gap-5 mt-4">
                    <div>
                      <Image src={post.galleryone} alt="gallery" width={250} height={250} />
                    </div>
                    <div>
                      <Image src={post.gallerytwo} alt="gallery" width={270} height={280} />
                      <Image src={post.gallerythree} alt="gallery" width={270} height={280} className="pt-5" />
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <p className="font-medium text-slate-700">{post.description}</p>
                    <div className="border border-gray-300 mt-3"></div>
                  </div>
                  <div className="flex items-center gap-7 px-4 py-2">
                    <div className="flex items-center gap-2 bg-slate-100 rounded-2xl pl-2">
                      <CiHeart className="text-2xl" />
                      <span>{post.likes}</span>
                    </div>
                    <FaRegCommentDots className="text-2xl text-gray-300" />
                    <TbLocationShare className="text-2xl text-gray-300" />
                    <BiBookmarkMinus className="text-2xl text-gray-300" />
                  </div>
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
