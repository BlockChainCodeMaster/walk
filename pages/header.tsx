import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  // const [isMobile, setIsMobile] = useState(false)
  const [nav, setNav] = useState([
    {
      name: "How to play",
      href: "/",
    },
    {
      name: "Whitepaper",
      href: "/",
    },
    {
      name: "Linktree",
      href: "/",
    },
    {
      name: "Events",
      href: "/",
    },
    {
      name: "Careers",
      href: "/",
    },
    {
      name: "Help",
      href: "/",
    },
  ]);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <img src="/logo.png" width={100} height={100} alt="logo" />

      <ul
        className="fixed top-0 bottom-0 right-0 z-50 flex-col justify-start hidden w-40 gap-4 p-4 text-sm text-white bg-white sm:flex sm:justify-center sm:bg-transparent bg-opacity-40 sm:bg-opacity-100 sm:relative sm:w-auto sm:flex-row backdrop-blur-sm sm:backdrop-blur-none sm:p-0"
      >
        {nav.map((el, index) => (
          <Link key={index} href={el.href} className=" hover:text-orange-500">
            <li>{el.name}</li>
          </Link>
        ))}
      </ul>
      <button className="flex flex-row items-center px-4 py-2 text-sm text-white bg-orange-600 rounded-md cursor-pointer hover:bg-orange-500">
        <img src="/icon_download.svg" width={14} height={14} className="mr-1 " />
        <span>Dowload</span>
      </button>
      {/* <Web3Button /> */}
    </header>
  );
}
