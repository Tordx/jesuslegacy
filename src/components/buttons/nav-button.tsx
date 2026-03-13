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

type Props = {
  label: string;
  onClick(): void;
}

const NavButton = (props: Props) => {
  const { label, onClick} = props;
  return (
    <button className='text-white hover:scale-105 font-semibold cursor-pointer' onClick={onClick}>
      {label}
    </button>
  )
}

export default NavButton