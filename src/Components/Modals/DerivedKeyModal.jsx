import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import Deso from "deso-protocol";
import toast, { Toaster } from "react-hot-toast";
function DerivedKeyModal({
  showModal,
  setShowModal,
  loggedInKey,
  bidAmountDeSo,
  username,
  listOfNftHash,
  nftHashHexToBid,
  desoHolding
}) {
  const [isStaking, setIsStaking] = useState(false);
  const deso = new Deso();

  useEffect(() => {
    if (!showModal) setIsStaking(false);
  }, [showModal]);

  const handleDerivedAndStake = async () => {
    if(desoHolding < bidAmountDeSo){
      toast.error("You don't have enough $DeSo to bid");
      return;
    }
    setIsStaking(true);
    let nftLimitMap = {};
    listOfNftHash.forEach((nft) => {
      const postHashHex = nft.split("-")[0];
      const serial = nft.split("-")[1];
      if (postHashHex in nftLimitMap) {
        nftLimitMap[postHashHex][serial] = {
          transfer: 3,
          update: 3,
        };
      } else {
        nftLimitMap[postHashHex] = {
          [serial]: {
            transfer: 60,
            update: 60,
            burn: 60,
          },
        };
      }
    });

    console.log(nftLimitMap);

    const payload = {
      publicKey: loggedInKey,
      expirationDays: 7,
      transactionSpendingLimitResponse: {
        GlobalDESOLimit: (parseInt(bidAmountDeSo) + 1) * 1e9,
        TransactionCountLimitMap: {
          AUTHORIZE_DERIVED_KEY: 2,
          BASIC_TRANSFER: 3,
          NFT_BID: 4,
        },
        
        NFTOperationLimitMap: nftLimitMap,
      },
    };
    const user = await deso.identity.derive(payload);
    console.log(user);

    const res2 = await fetch("https://talkbuddy.in/init-cpa-derived-keys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data2 = await res2.json();
    if (data2.insertion) {
      const jwt = await deso.identity.getJwt(undefined);
      const res3 = await fetch("https://talkbuddy.in/cpa-bid-with-stake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jwt: jwt,
          bidderKey: loggedInKey,
          bidAmount: bidAmountDeSo,
          username: username,
          nftHashHexToStakeList: listOfNftHash,
          nftHashHexToBid: nftHashHexToBid,
        }),
      });
      const data3 = await res3.json();
      console.log(data3);
      if (data3.remark === "Bid placed successfully!") {
        toast.success("Bid placed successfully!");
        //wait for 1 second
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(`${data3.remark}. Please try again`);
      }
    } else {
      toast.error(`${data2.remark}. Please try again`);
    }

    console.log(data2);

    setIsStaking(false);
  };
  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
          onClose={() => setShowModal(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-70' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <Toaster />
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-[#150026] border-[#150026] border text-left align-middle shadow-xl transition-all text-white'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg py-4  px-6 font-semibold leading-6 border-b border-[#150026]'>
                    Stake and Bid
                  </Dialog.Title>
                  <div className='mt-4 px-6'>
                    <p className='primaryTextColor'>
                      By Clicking continue you will be asked to give
                      CyberPunkApes a derived key for partial access to perform
                      actions on your behalf. <br></br> <br></br>
                      You are bidding: {bidAmountDeSo} $DeSo<br></br>
                      By Staking 25 CyberPunkApes. If you win the bid, your 25
                      staked NFTs will be burned
                      <br></br> You will get a shared 4% royalty on this NFT 
                      if you loose the bid and only 3 of your staked NFTs will
                      be burned.
                    </p>

                    {isStaking && (
                      <div className='flex justify-center items-center  mt-2 bg'>
                        <div className='animate-spin rounded-full h-20 w-20 border-b-2 border-red-500'></div>
                      </div>
                    )}
                  </div>
                  <div className='mt-6 flex justify-center py-3 px-6 secondaryBg'>
                    <button
                      className='bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md'
                      onClick={() => {
                        handleDerivedAndStake();
                      }}>
                      Continue
                    </button>
                  </div>

                  <div className='mt-6 flex justify-end space-x-4 py-3 px-6 bg-[#27093f]'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-full   px-4 py-2 text-sm font-medium  focus:outline-none bg-red-500 text-white hover:bg-red-600'
                      onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default DerivedKeyModal;
