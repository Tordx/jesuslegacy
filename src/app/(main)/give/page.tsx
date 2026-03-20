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

import { GiveServices } from "@/app/services/give-services";
import GiveClient from "./client";

export const dynamic = "force-dynamic";

async function Page() {
  const data = await GiveServices.getGive();
    const url = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

  return <GiveClient {...data} url={url!} />;
}

export default Page;
