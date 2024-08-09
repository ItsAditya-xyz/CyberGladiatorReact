import React from "react";
import { Link } from "react-router-dom";
export default function NFTCard({ value, nftHashHex, apeInfo, holderInfo }) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center relative px-2 sm:px-4 my-1 sm:my-2 lg:my-3 '>
        <a href={`https://diamondapp.com/nft/${nftHashHex}`} target='_blank'>
          <img
            className='w-full rounded-t-md hover:shadow-purple-800 hover:shadow-lg'
            src={value.img}
          />
        </a>
        <div className='bg-[#350353] w-full rounded-b-md px-2 py-3'>
          <h1 className='text-white font-semibold'>{value.name}</h1>
          {holderInfo && (
            <div className='flex text-white items-center space-x-2 my-2 font-semibold justify-between flex-col xl:flex-row'>
              <div className='flex space-x-2 items-center'>
                <p>Owned By: </p>
               <Link
                  to={`/u/${
                    holderInfo[apeInfo[`${nftHashHex}-1`].owner].username
                  }`}
                  className='text-[#BB0163] underline font-semibold'>
                  {holderInfo[apeInfo[`${nftHashHex}-1`].owner].username}
                </Link>

                <div
                  style={{
                    backgroundImage: `url(${
                      holderInfo[apeInfo[`${nftHashHex}-1`].owner].profilePic
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className='w-10 h-10 rounded-full'></div>
              </div>

              {apeInfo[`${nftHashHex}-1`].isForSale === "0" ? (
                <div className='bg-gray-900 text-gray-200 px-4 py-1 rounded-md my-2'>
                  Not For Sale
                </div>
              ) : (
                <button className='bg-green-600 text-gray-100 px-4 py-1 rounded-md hover:bg-green-700 text-sm lg:text-base my-2'>
                  Bid {Math.round(apeInfo[`${nftHashHex}-1`].minBidDeso / 1e9)}{" "}
                  $DESO
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
