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

import AboutServices from "@/app/services/about-services";
import AboutClient from "./client";

async function About() {
  const data = await AboutServices.getAll();
  return <AboutClient {...data} />
}

export default About;
