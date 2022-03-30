import Image from 'next/image'

function Header() {
  return (
    <div>
      <div>
        {/* {left} */}
        <div className="relative h-24 w-24">
          <Image
            layout="fill"
            src="https://i.pinimg.com/originals/ac/76/72/ac76724616bde8c8749f73c1d07ee255.png"
          />
        </div>

        {/* {middle} */}

        {/* {right} */}
      </div>
    </div>
  )
}
export default Header
