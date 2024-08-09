import React from "react";
import elipse5 from "../../assets/ellipse-5@2x.png";
import elipse6 from "../../assets/ellipse-6@2x.png";
import elipse7 from "../../assets/ellipse-7@2x.png";
function Theme(props) {
  return (
    <div className="flex flex-col items-center bg-[#0f0f0f] py-16 my-10">
      <h1 className="text-white text-5xl font-bold mb-4">Theme</h1>
      <div className="h-1 bg-white w-64 opacity-25 rounded-t mb-8"></div>

      <div className="flex w-3/4  space-x-3">
        <div className="flex flex-col items-center">
          <img src={elipse5} className="" />

          <p className="text-white text-2xl">Meme Coin</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={elipse6} className="" />

          <p className="text-white text-2xl">Arena OG</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={elipse7} className="" />

          <p className="text-white text-2xl">Meme Coin</p>
        </div>
      </div>
    </div>
  );
}

export default Theme;
