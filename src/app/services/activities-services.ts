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
import { ActivitiesBySlugProp, ActivitiesIdProp, ActivitiesProp } from "../(main)/activities/index.types";

export default class ActivitiesServices {
  static async getAll() {
    const response = await api.get('/activities', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    console.log(response.data)
    return response.data as ActivitiesProp;
  }

  static async getById(id: string) {
    try {
      const response = await api.get(`/Activities/getById`, {
        params: { id }
      });

      return response.data as ActivitiesIdProp;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.response?.status === 404) {
        return null;
      }

      throw error;
    }
  }

  static async getBySlug(id: string, slug: string) {
    const response = await api.get(`/Activities/getBySlug`, {
      params: {
        id,
        slug
      }
    })
    if (response.status) {
      console.log(response.status)
    }
    return response.data as ActivitiesBySlugProp;
  }
}