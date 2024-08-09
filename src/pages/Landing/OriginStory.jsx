import React from "react";
import { useNavigate } from "react-router";

import rectangle7 from "../../assets/rectangle-7@2x.png";
import rectangle11 from "../../assets/rectangle-11@2x.png";
import rectangle10 from "../../assets/rectangle-10@2x.png";
import rectangle8 from "../../assets/rectangle-8@2x.png";
import rectangle9 from "../../assets/rectangle-9@2x.png";

export default function OriginStory() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-black py-16 my-10">
      <h1 className="text-white text-5xl font-bold mb-4">Origin Story</h1>
      <div className="h-1 bg-white w-64 opacity-25 rounded-t mb-8"></div>
      <div className="w-full  text-white my-8">
        <div className="flex flex-col sm:flex-row  sm:w-3/4 justify-center mx-auto space-x-4 items-center">
          <img
            className="w-3/4 sm:w-1/2"
            loading="lazy"
            alt="Cyber Gladiator"
            src={rectangle7}
          />
          <div className="">
            <p className="text-xl leading-loose font-thin">
              <span className="text-xl leading-loose font-extrabold">
                Introduction:{" "}
              </span>
              Cyber Gladiator is an innovative NFT project that merges
              personalized digital art with the limitless possibilities of
              blockchain technology. Our mission is to create a unique and
              evolving series of NFTs that resonate with collectors on a
              personal level. The sole purpose of Cyber Gladiator is to
              advertise the Avalanche chain in all other blockchain.
            </p>
          </div>
        </div>
        <div className="flex  sm:flex-row flex-col-reverse sm:w-3/4 justify-center mx-auto space-x-4 items-center">
          <div className="flex-1">
            <p className="text-xl leading-loose font-thin px-3">
              <span className="text-xl leading-loose font-extrabold">
                Vision:{" "}
              </span>
              To become a leading platform for personalised NFTs not only in
              AVAX but also in multichain project, offering collectors unique,
              theme-based digital assets that reflect their individuality and
              tastes. One of our theme based ideas is to main NFTs promoting
              various meme coins in the AVAX system.
              <br></br>
              <span className="text-xl leading-loose font-extrabold">
                Mission:{" "}
              </span>
              To provide a customizable NFT experience, allowing collectors to
              own a piece of art that is not only aesthetically appealing but
              also deeply personal.
            </p>
          </div>
          <img
            className="w-3/4 sm:w-1/2 "
            loading="lazy"
            alt="Cyber Gladiator"
            src={rectangle8}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:w-3/4 justify-center mx-auto space-x-4 items-center">
          <img
            className="w-3/4 sm:w-1/2"
            loading="lazy"
            alt="NFT Series"
            src={rectangle9}
          />
          <div className="flex-1">
            <p className="text-xl leading-loose font-thin">
              <span className="text-xl leading-loose font-extrabold">
                Rarity System:
              </span>
              The rarity of Cyber Gladiator NFTs is determined by a combination
              of color schemes, natural elements, and additional attributes. The
              rarity tiers are as follows:
              <br></br>
              <span className="font-bold underline">Common:</span> Basic color
              schemes with one natural element. <br></br>
              <span className="font-bold underline">Uncommon:</span> Unique
              color combinations with two natural elements.<br></br>
              <span className="font-bold underline">Rare:</span> Rare color
              palettes with three natural elements and additional attributes.
              <br></br>
              <span className="font-bold underline">Epic:</span>
              Exclusive color themes with a combination of all four natural
              elements and multiple rare attributes. <br></br>
              <span className="font-bold underline">Legendary: </span>Unique,
              one-of-a-kind designs with special effects and attributes,
              available only in limited quantities. The rarity system ensures
              that each NFT has a distinct value and appeal, making the
              collection more diverse and collectible.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row  sm:w-3/4 justify-center mx-auto space-x-4 items-center">
          <div className="flex-1">
            <p className="text-xl leading-loose font-thin px-3">
              <span className="text-xl leading-loose font-extrabold">
                Collection Overview:{" "}
              </span>
              The inaugural Cyber Gladiator collection features 100 unique NFTs,
              each meticulously crafted and personalized for OG Arena users. The
              collection will expand with new themes as the project evolves,
              ensuring a continuous stream of fresh and exciting content for
              collectors.
            </p>
          </div>
          <img
            className="w-3/4 sm:w-1/2"
            loading="lazy"
            alt="Avalanche Blockchain"
            src={rectangle10}
          />
        </div>
        <div className="flex flex-col sm:flex-row w-3/4 justify-center mx-auto space-x-4 my-10 items-center">
          <img
            className="w-3/4 sm:w-1/2"
            loading="lazy"
            alt="Community"
            src={rectangle11}
          />
          <div className="flex-1">
            <p className="text-xl leading-loose font-thin">
              <span className="text-xl leading-loose font-extrabold">
                Personalization and Customization:{" "}
              </span>
              Cyber Gladiator stands out by offering unparalleled customization
              options. Collectors can personalize their NFTs based on various
              elements, ensuring each piece is a unique representation of their
              identity. Customization options include:
              <br></br>
              <span className="text-xl font-bold">Color Schemes:</span> A wide
              range of colors to suit individual preferences <br></br>
              <span className="text-xl font-bold">Themes: </span>Natural
              elements like water, fire, snow, and tech influence the design,
              adding a unique touch to each NFT. <br></br>
              <span className="text-xl font-bold">Attributes</span>Additional
              elements, such as accessories and backgrounds, can be customised.{" "}
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
