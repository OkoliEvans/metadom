import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { SyntheticEvent } from "react";
import { useState, useEffect } from "react";
import {
  Address,
  useAccount,
  useContract,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import marketAbi from "../pages/utils/nftMarket.json";
import nftAbi from "../pages/utils/nft.json";

const Nft = () => {
  const { address } = useAccount();

  const NftContract = "0xae8c16c60ED69ba3528D8a4B745568938ae0629b";
  const marketContract = "0xf3cbCFE00a258d1A8F3950dfB353111D3F65d031";

  const [nftContractAddress, setNftContractAddress] = useState<Address>("0x0f");
  const [allownace, setAllowance] = useState<String>(null);
  const [tokenId, settokenId] = useState<String>(null);
  const [nftPrice, setNftPrice] = useState<String>(null);

  useContractRead({
    address: marketContract,
    abi: marketAbi,
    functionName: "fetchMarketItems",
    onSuccess(data) {
      console.log(data);
    },
  });

  useContractRead({
    address: NftContract,
    abi: nftAbi,
    functionName: "getBalanceOfToken",
    args: [marketContract],
    onSuccess(data) {
      console.log(String(data));
    },
  });

  const { config: listConfig } = usePrepareContractWrite({
    address: marketContract,
    abi: marketAbi,
    functionName: "ListItemForSale",
    args: [nftContractAddress, tokenId, nftPrice],
  });

  const {
    data: listNftData,
    isLoading: listNftIsLoading,
    isSuccess: listNftIsSuccess,
    write: ListItemForSale,
  } = useContractWrite(listConfig);

  const handleListNft = (e: SyntheticEvent) => {
    e.preventDefault()
    ListItemForSale?.();
  }

  return (
    <div>
      <form className=""></form>
    </div>
  );
};

export default Nft;
