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

import React from 'react'

type Props = {
  children: React.ReactNode;
}

const BaseContainer = ({children}: Props) => {
  return (
    <div className='flex flex-col w-full overflow-y-scroll'>
      {children}
    </div>
  )
}

export default BaseContainer