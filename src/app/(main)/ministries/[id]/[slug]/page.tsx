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

import MinistriesServices from '@/app/services/ministries-services'
import MinistriesSlugClient from './client'

async function MinistriesSlug({ params }: { params: Promise<{ id: string, slug: string }> }) {
  const { id, slug } = await params

  const response = await MinistriesServices.getBySlug(id, slug);
    const url = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

  console.log(response)
  return <MinistriesSlugClient data={response.data} url={url!} />
}

export default MinistriesSlug;
