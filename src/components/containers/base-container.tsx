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