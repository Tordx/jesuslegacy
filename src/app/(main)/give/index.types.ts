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

export interface WalletData {
  name: string;
  wallet_type: 'qr' | 'bank_transfer' | 'mobile_number';
  wallet_address: string;
  qr_image: string;
  bank_icon: string,
  bank_slug_icon: string,
}

export type WalletsProp = {
  data: WalletData[];
  status: boolean;
  ur: string;
}

export interface GiveData {

  id: number;
  label: string;
  content: string;
}

export type GiveProp = {
  status: boolean;
  tabs: GiveData[];
  url: string;
}