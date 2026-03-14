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

import HomeClient from "./client";
import { HomeServices } from "@/app/services/home-services";
export const dynamic = "force-dynamic";

async function Home() {
  
  const data = await HomeServices.getGallery();
  return <HomeClient data={data.data} />;
}

export default Home;
