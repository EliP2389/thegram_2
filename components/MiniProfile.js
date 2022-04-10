import { signOut, useSession } from 'next-auth/react'

function MiniProfile() {
const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt="profile img" />

        <div className="mx-4 flex-1">
            <h2 className="font-bold">{session?.user?.username}</h2>
            <h3 className="text-sm text-gray-500">Welcome to Instagram 2.0</h3>
        </div>

        <button onClick={signOut}
        className="text-blue-400 text-sm font-semibold">
          Sign Out</button>
    </div>
  )
}
export default MiniProfile