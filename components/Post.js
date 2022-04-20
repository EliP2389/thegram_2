import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [userComments, setUserComments] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setUserComments(snapshot.docs)
      )[db]
  )

  const sendComment = async (e) => {
    e.preventDefault()

    // commentToSend variable copies the comment
    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

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
      {userComments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-track-black">
          {userComments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImg}
                alt=""
              />
              <p className='text-sm flex-1'>
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* {Input box} */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="text-blue-600"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}
export default Post
