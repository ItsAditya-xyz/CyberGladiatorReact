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
              Cyber Gladiator, we embark on a journey where the realms of art,
              technology, and personalization converge to create unique digital
              collectibles. Our vision is simple: to bring forth a series of NFT
              collections that not only captivate the eye but also hold a deeper
              connection to their owners.
            </p>
          </div>
        </div>
        <div className="flex  sm:flex-row flex-col-reverse sm:w-3/4 justify-center mx-auto space-x-4 items-center">
          <div className="flex-1">
            <p className="text-xl leading-loose font-thin px-3">
              The idea of Cyber Gladiator was born in Arena, a community where
              creativity thrives and innovation is celebrated. Our initial
              collection, which consists of 100 meticulously crafted pieces, was
              showcased exclusively on the Arena app. These pieces were designed
              with a unique touch, personalized specifically for the OG Arena
              users, celebrating their early support and enthusiasm.
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
              Our NFT series is thematic, with each batch drawing inspiration
              from a distinct theme. The inaugural batch is centered around the
              "Arena" theme, reflecting the spirit of competition, bravery, and
              camaraderie. But our vision doesn't stop here. We are committed to
              continuing this journey, introducing new themes and expanding our
              collection, as long as inspiration exists.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row  sm:w-3/4 justify-center mx-auto space-x-4 items-center">
          <div className="flex-1">
            <p className="text-xl leading-loose font-thin px-3">
              Our NFTs are minted on the Avalanche blockchain, ensuring fast,
              secure, and eco-friendly transactions. We aim to make our NFTs
              accessible to a broad audience, which is why they will be
              available for sale on both OpenSea and Joepegs, two of the most
              prominent marketplaces in the NFT space.
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
              As we prepare to launch our first batch of themed NFTs, we invite
              you to join our community. Whether you are a seasoned collector, a
              digital art enthusiast, or someone new to the world of NFTs, Cyber
              Gladiator offers something unique and personal for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
