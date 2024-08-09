import React from "react";

export default function Footer() {
  return (
    <footer
      className={`text-center lg:text-left  bg-[#black] text-white py-10 h-80 relative`}
    >
      <div className="w-full px-2  flex justify-center mx-auto">
        <div>
          <p className="text-green-500 text-xl ml-2 font-bold"> Created By</p>
          <div className="flex flex-col mt-4 ">
            <a
              className="flex space-x-3 items-center"
              href="https://twitter.com/NancyDubey_"
              target="_blank"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1707714446263779328/jBtFeqR6_400x400.jpg"
                className="h-24 w-24 rounded-full"
              />

              <div>
                <p className="text-[#BB0168] text-xl font-semibold"> Nancy</p>
                <p className="text-gray-600 text-xl italic font-semibold">
                  {" "}
                  NFT Artist & Designer
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
