import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* {left} */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://links.papareact.com/ocw"
          />
        </div>

        <div className="relative w-14 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://us.123rf.com/450wm/alsstocks450/alsstocks4502002/alsstocks450200200026/139320423-voronezh-russia-january-31-2020-instagram-logo-black-round-icon-with-reflection-and-shadow.jpg?ver=6"
          />
        </div>

        {/* {middle-search input field} */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-100 pl-10 
          focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* {right} */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 w-4 h-4 bg-red-500 text-xs
            rounded-full flex items-center justify-center animate-bounce text-white"> 
            5</div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU"
            alt="profile pic"
            className="h-10 cursor-pointer rounded-full hover:scale-125
            transition-all duration-150 ease-out"
          />
        </div>
      </div>
    </div>
  )
}
export default Header
