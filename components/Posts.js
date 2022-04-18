import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import Post from './Post'

const post = [
  {
    id: '123',
    username: 'pagan123',
    userImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU',
    caption: 'SUBSCRIBE BECAUSE THIS IS AMAZING!!!',
  },
  {
    id: '321',
    username: 'pagan123',
    userImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU',
    caption: 'SUBSCRIBE BECAUSE THIS IS AMAZING!!!',
  },
  {
    id: '456',
    username: 'pagan123',
    userImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU',
    caption: 'SUBSCRIBE BECAUSE THIS IS AMAZING!!!',
  },
]

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   onSnapshot(collection(query(db, 'posts')))
  }, [])

  return (
    <div>
      {post.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
export default Posts
