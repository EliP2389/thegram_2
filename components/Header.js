import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        {/* {left} */}
        <div className="relative hidden h-24 w-24 lg:inline-grid">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://links.papareact.com/ocw"
          />
        </div>

        <div className="relative w-14 h-14 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://us.123rf.com/450wm/alsstocks450/alsstocks4502002/alsstocks450200200026/139320423-voronezh-russia-january-31-2020-instagram-logo-black-round-icon-with-reflection-and-shadow.jpg?ver=6"
          />
        </div>

        {/* {middle-search input field} */}
        <div>
            <input type="text" placeholder="Search" />
        </div>

        {/* {right} */}
      </div>
    </div>
  )
}
export default Header
