import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center align-middle">
      <Link href="/">
        <Image
          src="/logo.webp"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </Link>
    </div>
  );
};

export default Header;
