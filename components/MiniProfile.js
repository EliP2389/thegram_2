function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQws2ynrnSprthzn-YO-gAvkARHAlON2Yicw&usqp=CAU"
        alt="profile img" />

        <div className="mx-4 flex-1">
            <h2 className="font-bold">pagan123</h2>
            <h3 className="text-sm text-gray-500">Welcome to Instagram 2.0</h3>
        </div>

        <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  )
}
export default MiniProfile