import React from 'react'

type Props = {
  children: React.ReactNode;
}

const ImageContainer = ({children}: Props) => {
  return (
    <div className='flex w-full h-screen justify-center items-center'
      style={{
          backgroundImage: "url('assets/cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
    >{children}</div>
  )
}

export default ImageContainer