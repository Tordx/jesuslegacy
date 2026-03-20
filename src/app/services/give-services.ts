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

import api from "@/axios";
import { GiveProp, WalletsProp } from "../(main)/give/index.types";

export class GiveServices {

  static async getWalletsById (id: number) {
    const response = await api.get('/give/getWalletsById', {
      params: {
        id
      }
    })
    return response.data as WalletsProp;
  }

  static async getGive () {
    const response = await api.get('/give')
    return response.data as GiveProp;
  }
}