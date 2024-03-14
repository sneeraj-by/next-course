"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-3 p-5 bg-slate-200">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">Sign out</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">login</Link>
      )}
    </div>
  );
};

export default Navbar;
