import React from 'react';
import data from '../../shared/JSON/data.json';
import Image from 'next/image';
import { FaEllipsisV, FaRegCommentDots } from 'react-icons/fa';
import { TbLocationShare } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';

interface CommentData {
    id: number;
    user?: string;
    name: string;
    activeseen: string;
    profileimg?: string;
    description: string;
}

interface CommentChatData {
    id: number;
    commentuserimage?: string;
    username?: string;
    commenttime: string;
    commenttext: string;
}

const CommentContent: React.FC = () => {
    const comentData: CommentData[] = data.comentData;
    const commentschatData: CommentChatData[] = data.commentschatData.slice(0, 3);

    return (
        <div>
            <div className='ml-5 shadow-lg pb-11' style={{ width: 'calc(100% - 30px)' }}>
                {comentData.map(post => (
                    <div key={post.id}>
                        <div className='flex gap-4'>
                            <div className='ml-5 mt-4'>
                                {post.user && (
                                    <Image src={post.user} alt='postimg' width={50} height={50} />
                                )}
                            </div>
                            <div className='flex justify-between w-full'>
                                <div className='mt-3'>
                                    <h2 className='font-inter font-semibold text-slate-800'>{post.name}</h2>
                                    <p className='font-inter text-slate-400'>{post.activeseen}</p>
                                </div>
                                <div className='mt-6 mr-5'>
                                    <FaEllipsisV className='h-6 text-gray-400' />
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 w-full pl-4 pt-4'>
                            {post.profileimg && (
                                <Image src={post.profileimg} alt='gallery' width={320} height={280} />
                            )}
                        </div>
                        <div>
                            <p className='pl-5 pt-4 font-inter text-base font-medium text-slate-700'>{post.description}</p>
                            <div className="border border-gray-300 mt-3 ml-5" style={{ width: 'calc(100% - 30px)' }}></div>
                        </div>
                        <div className='ml-4 mt-3'>
                            <div className='flex gap-7'>
                                <CiHeart className='text-2xl' />
                                <FaRegCommentDots className='text-2xl text-gray-300 cursor-pointer' />
                                <TbLocationShare className='text-2xl text-gray-300' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-5 ml-5' style={{ width: 'calc(100% - 30px)' }}>
                <div className='border border-gray-300 h-auto pb-7 mt-8 rounded-lg'>
                    {commentschatData.map(chat => (
                        <div key={chat.id} className='mb-4'>
                            <div className='flex'>
                                <div>
                                    {chat.commentuserimage && (
                                        <Image src={chat.commentuserimage} alt='userimg' width={40} height={40} />
                                    )}
                                </div>
                                <div className='flex items-center gap-32'>
                                    <p className='pl-3'>{chat.username || 'Anonymous'}</p> {/* Provide a default value if username is undefined */}
                                    <p className='text-gray-400'>{chat.commenttime}</p>
                                </div>
                            </div>
                            <div className='ml-12 mt-1 w-72 h-14 bg-[#F7F7F7] rounded-lg'>
                                <p className='text-[#023047] text-sm pl-2 pt-2'>{chat.commenttext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CommentContent;
