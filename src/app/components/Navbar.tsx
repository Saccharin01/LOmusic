"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();

  // useEffect(() => {
  //   if (path === "/") setIsView(false);
  //   else setIsView(true);
  // }, [path]);

  return (
    <>
      <nav>
        <div className="w-screen fixed z-50 bg-[#282c2c]">
          <div className="flex justify-between h-16 px-10 shadow items-cente">
            <div className="flex items-center space-x-1">
              <div>
                <Link href="/" className="">
                  <h1 className="text-xl lg:text-2xl font-bold cursor-pointer mr-3 border-cyan-300 text-slate-200 hover:text-yellow-500">
                    LoA Music
                  </h1>
                </Link>
              </div>
              <div className="hidden lg:flex justify-around space-x-4 gap-10">
                <Link
                  href="/"
                  className="hover:text-yellow-500 text-slate-200 pl-10 font-bold"
                >
                  Home
                </Link>
                <Link
                  href="music"
                  className="hover:text-yellow-500 text-slate-200 font-bold"
                >
                  Music
                </Link>
                <Link
                  href="about"
                  className="hover:text-yellow-500 text-slate-200 font-bold"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
