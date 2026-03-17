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
import { MinistriesBySlugProp, MinistriesIdProp, MinistriesProp } from "../(main)/ministries/index.types";

export default class MinistriesServices {
  static async getAll() {
    const response = await api.get('/ministries', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    return response.data as MinistriesProp;
  }

  static async getById(id: string) {
    const response = await api.get(`/ministries/getById`, {
      params: {
        id
      }
    })
    return response.data as MinistriesIdProp;
  }

  static async getBySlug(id: string, slug: string) {
    const response = await api.get(`/ministries/getBySlug`, {
      params: {
        id,
        slug
      }
    })
    return response.data as MinistriesBySlugProp;
  }
}