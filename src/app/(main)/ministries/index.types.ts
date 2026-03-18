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

export interface MinistriesData {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_by: string;
  updated_at: string;
  is_active: boolean;
  path: string;
}

export type MinistriesProp = {
  status: boolean;
  data: MinistriesData[];
  url: string;
}

export type MinistriesIdProp = {
  status: boolean;
  data: {
    slug: string;
  };
  url: string;
}

export type MinistriesBySlugProp = {
  status: boolean;
  data: MinistriesData;
}