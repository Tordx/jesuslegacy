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

export interface TestimonyData {
  id: string;
  testimony_id: string | null;
  title: string;
  description: string[];
  name: string;
  image_slug: string | null;
  image_banner: string | null;
  created_by: string | null;
  created_at: string | null;
  updated_by: string | null;
  updated_at: string | null;
  is_published: boolean | null;
  tags: string[] | null;
  slug: string;
}

export interface Testimony {
  id: string;
  slug: string;
  created_at: string | null;
  updated_at: string | null;
  tags: string[] | null;
  status: string | null;
  title: string;
  image_slug: string;
  description: string;
}

export type TestimoniesProp = {
  status: boolean;
  data: Testimony[];
  url: string;
}

export type TestimoniesIdProp = {
  status: boolean;
  data: {
    slug: string;
  };
  url: string;
}

export type TestimoniesBySlugProp = {
  status: boolean;
  data: TestimonyData;
  correct_slug: string;
  redirect: boolean;
}