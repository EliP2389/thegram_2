import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
        {/* {left} */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            objectFit='contain'
            layout="fill"
            src="https://links.papareact.com/ocw"
          />
        </div>

        {/* {middle} */}

        {/* {right} */}
      </div>
    </div>
  )
}
export default Header
