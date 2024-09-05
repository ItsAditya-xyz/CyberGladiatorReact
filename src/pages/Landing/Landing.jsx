import React, { useEffect, useState } from "react";

import OriginStory from "./OriginStory";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import Theme from "./Theme";
import union from "../../assets/union.svg";
export default function Landing() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   async function get() {}
  // }, []);

  const handleMessage = async (e) => {
    //prevent page reload due to form submit
    if (isSending) return;

    e.preventDefault();
    const address = document.getElementById("address").value;
    const username = document.getElementById("username").value;

    if (address.length > 0 && username.length > 0) {
      setIsSending(true);
      try {
        const response = await fetch("https://cordify.xyz/messageAditya", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "MESSAGE FROM CYEBR GLADIATOR",
            id: username,
            username: address,
          }),
        });
        if (response.status === 200) {
          setSuccess(true);
          setIsSending(false);
          console.log("sent succesfully");
          alert("You have joined Waitlist!");
        }
      } catch (err) {
        console.log(err);
        setIsSending(false);
        alert("somethign went wrong, please try again");
      }
    }
    //make a post request to the server
  };
  return (
    <div className='bg-black'>
      <>
        <div className='pt-5 sm:pt-2 bg-black'>
          <div className='container px-3 pt-4 mx-auto flex flex-wrap flex-col-reverse md:flex-row items-center pb-8 '>
            <div className='flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left '>
              <div className='mx-auto'>
                <h2 className='text-white '>
                  <p className=' text-white text-4xl sm:text-5xl'>CYBER</p>
                  <p className=' text-whit text-4xl sm:text-5xl mt-3'>
                    GLADIATORS
                  </p>
                  <p className='m-0 text-white'>&nbsp;</p>
                </h2>

                <div className='text-white text-2xl mt-1 ml-2'>
                  Theme Based NFT
                </div>
                <div className="ml-2 mt-7">
                  <a
                    href='https://opensea.io/collection/cyber-gladiator'
                    target="_blank"
                    className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-5 py-3 text-xl  '>
                    View Collection
                  </a>
                </div>
              </div>
              <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0  lg:bg-transparent  p-4 lg:p-0 z-20'></div>
              {/* <Login /> */}
            </div>

            <div className='px-2 md:w-3/6  flex justify-center my-8 sm:my-5'>
              <img className=' ' src={union} />
            </div>
          </div>
        </div>
        <div className='bg-[#0f0f0f] py-10'>
          <div className='flex justify-center mx-auto flex-col  w-3/4 sm:w-3/6 space-y-4 items-center '>
            <p className='text-white text-2xl text-center '>
              JOIN WAITING LIST
            </p>

            <p className='text-white'>Avax Address</p>
            <input
              type='text'
              id='address'
              placeholder='0x...'
              className='bg-black text-white border-2 rounded-lg p-2 outline-none border-[#1f1f1f] w-full'
            />

            <p className='text-white'>Arena Username</p>
            <input
              type='text'
              id='username'
              placeholder='@AvaxUsername'
              className='bg-black text-white border-2 rounded-lg p-2 outline-none border-[#1f1f1f] w-full '
            />

            <button
              className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2  '
              onClick={handleMessage}>
              Submit
            </button>
          </div>
        </div>

        <OriginStory />
        <Theme />

        <Footer />
      </>
    </div>
  );
}
