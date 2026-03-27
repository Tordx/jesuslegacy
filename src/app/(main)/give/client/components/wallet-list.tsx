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

interface WalletListProps {
  wallets: WalletData[];
  selectedWallet: WalletData | null;
  setSelectedWallet: (wallet: WalletData) => void;
  url: string;
}

const WalletList = ({ wallets, selectedWallet, setSelectedWallet, url }: WalletListProps) => {
  return (
    <div className="py-6 flex flex-col gap-4 w-full">
      {wallets.map((wallet) => {
        const isActive = selectedWallet?.wallet_address === wallet.wallet_address;
        return (
          <button
            key={wallet.wallet_address}
            onClick={() => setSelectedWallet(wallet)}
            className={`text-black cursor-pointer active:scale-100 hover:scale-102 flex items-center gap-3 p-3 rounded-md transition-all duration-150 ${
              isActive ? "bg-amber-100 shadow-md font-bold" : "hover:bg-gray-100 font-medium"
            }`}
          >
            {wallet.bank_slug_icon && (
              <div className="w-10 h-10 relative">
                <Image
                  src={`${url}${wallet.bank_slug_icon}`}
                  alt={`${wallet.name} Slug`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                  unoptimized
                />
              </div>
            )}
            <span>{wallet.name}</span>
          </button>
        );
      })}
      <div className="text-black text-sm p-4 text-left w-full font-medium absolute bottom-0">
        If you require a <strong>Certificate of Donation</strong>, please contact us and we will assist you.
      </div>
    </div>
  );
};

export default WalletList;