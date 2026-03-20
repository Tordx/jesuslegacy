/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

"use client";

import Image from "next/image";
import { WalletData } from "../../index.types";
import CopyIcon from "@/app/assets/icons/copy-icon";
import toaster from "@/helpers/toaster";

interface WalletDetailsProps {
  selectedWallet: WalletData | null;
  url: string;
}

const WalletDetails = ({ selectedWallet, url }: WalletDetailsProps) => {
  if (!selectedWallet) {
    return <p className="text-neutral-500">Please select a wallet to proceed</p>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedWallet.wallet_address);
    toaster.success("", "copied to clipboard");
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center m-2 p-10 w-[90%]">
      {selectedWallet.bank_icon && (
        <div className="w-30 h-20 max-w-30 max-h-20 relative mb-2">
          <Image
            src={`${url}${selectedWallet.bank_icon}`}
            alt={`${selectedWallet.name} Bank Icon`}
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      )}
      {selectedWallet.qr_image && (
        <div className="w-75 h-75 relative mb-6">
          <Image
            src={`${url}${selectedWallet.qr_image}`}
            alt={`${selectedWallet.name} QR`}
            fill
            onError={(e) => (e.currentTarget.src = "/assets/qr_sample.png")}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      )}
      <p className="font-semibold text-lg mb-2">{selectedWallet.name}</p>
      <div className="h-auto flex flex-row justify-between items-center gap-2">
        <p className="text-xl font-bold text-neutral-600 text-center">
          {selectedWallet.wallet_address}
        </p>
        <button onClick={handleCopy} className="active:scale-100 hover:scale-102 text-xs text-amber-600 hover:underline">
          <CopyIcon />
        </button>
      </div>
    </div>
  );
};

export default WalletDetails;