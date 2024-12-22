import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center align-middle">
      <Image
        src="/logo.webp"
        width={100}
        height={100}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Header;
