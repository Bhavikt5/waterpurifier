import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCreate } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between align-middle px-8">
      <Link href="/">
        <Image
          src="/logo.webp"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </Link>
      <div className="flex justify-center items-center">
        <Link
          href="/createcustomer"
          className="flex items-center gap-1 hover:text-red-300"
        >
          <IoMdCreate />
          Create
        </Link>
      </div>
    </div>
  );
};

export default Header;
