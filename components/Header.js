import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        {/* {left} */}
        <div className="relative hidden w-24 lg:inline-grid">
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
      </div>
    </div>
  )
}
export default Header
