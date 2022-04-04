import { 
    BookmarkIcon, 
    ChatIcon,
     DotsHorizontalIcon, 
     EmojiHappyIcon, 
     HeartIcon, 
     PaperAirplaneIcon } from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({id, username, userImg, img, caption}) {
  return (
    <div>
       {/* {Header} */}
       <div>
           <img src={userImg} alt="profile image" />
           <p>{username}</p>
           <DotsHorizontalIcon className="h-5" />
       </div>

       {/* {Img} */}

       {/* {Buttons} */}

       {/* {Cation} */}

       {/* {Comments} */}

       {/* {Input box} */}
    </div>
  )
}
export default Post