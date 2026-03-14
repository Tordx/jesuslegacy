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

import HamburgerIcon from "@/app/assets/icons/hamburger-icon";

type Props = {
  onClick(): void;
};

const MenuButton = (props: Props) => {
  const { onClick } = props;
  return (
    <div className="fixed top-0 w-full flex justify-end p-4 bg-transparent z-40">
      <button
        onClick={onClick}
        className="flex flex-col gap-1.5 justify-center items-center w-8 h-8"
      >
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default MenuButton;
