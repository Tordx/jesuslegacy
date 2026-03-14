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
import { AboutProps } from "@/types";

export default class AboutServices {
  static async getAll() {
    const response = await api.get('/about',{
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    return response.data as AboutProps;
  }
}