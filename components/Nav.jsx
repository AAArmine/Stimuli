"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import { useState, useEffect } from "react";
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16">
      <Link href="/">
        <Image src="/assets/images/logo.png" width={70} height={200} />
      </Link>
    </nav>
  );
};

export default Nav;
