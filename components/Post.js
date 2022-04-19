import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'

function Post({ id, username, userImg, img, caption }) {
const {data: session} = useSession();

  return (
    <div className="my-7 rounded-sm border bg-white">
      {/* {Header} */}
      <div className="flex items-center p-5">
        <img
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          src={userImg}
          alt="profile image"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* {Img} */}
      <img src={img} className="w-full object-cover" alt="profile image" />

      {/* {Buttons} */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* {Caption} */}
      <p className="truncate p-5">
        <span className="mr-2 font-bold">{username}</span>
        {caption}
      </p>

      {/* {Comments} */}

      {/* {Input box} */}
      {session && ( <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button className="text-blue-600">Post</button>
      </form>)}
    </div>
  )
}
export default Post
