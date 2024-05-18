import React from 'react'
//
// colors: {
//       Gray: "#5A5959",
//       rad: "#D01C28",
//       yellow: "#FFEAAE",
//       purple: "#5F00D9",
//     },
const Header = () => {
  return (
    <div
      className="myContainer flex flex-col
      "
    >
      <div className=" flex h-[60px] items-center justify-center rounded-[10px] bg-[#d2e449e3]">
        <div>
          <img width={51} src="images\MongoDB-Logo.png" alt="" />
        </div>
        <div className="text-[20px] font-bold ">MoongoDB Contact app</div>
      </div>
    </div>
  )
}

export default Header
