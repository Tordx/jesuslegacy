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

import TestimoniesClient from "./client";
import TestimoniesServices from "@/app/services/testimonies-services";
export const dynamic = "force-dynamic";

async function Page() {
  const data = await TestimoniesServices.getAll();
  const url = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

  return <TestimoniesClient {...data} url={url!} />;
}

export default Page;
