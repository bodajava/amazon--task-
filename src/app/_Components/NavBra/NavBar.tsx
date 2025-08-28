"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { signOut, useSession } from "next-auth/react"
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()
  const pathname = usePathname() // الصفحة الحالية

  function LogaoutNow() {
    signOut({
      callbackUrl: "/Signin"
    })
  }

  const links = ["Home", "Cart", "Products", "Categories", "Brands"]

  return (
    <nav className="top-0 left-0 w-full z-50 bg-gray-200 text-black shadow-lg">
      <div className="container mx-auto w-full lg:w-[80%] p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="left flex items-center gap-2">
          <Link
            className="flex items-center gap-2 text-black text-2xl font-bold transition-transform duration-300 hover:scale-105 hover:text-green-500"
            href="/"
          >
            <i className="text-green-400 fa-solid fa-cart-shopping transition-colors duration-300 hover:text-green-600" />
            FreshCard
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8 text-black">
            {links.map((item) => {
              const href = item === "Home" ? "/" : `/${item}`
              const isActive = pathname === href
              return (
                <li key={item}>
                  <Link
                    href={href}
                    className={`relative text-lg font-medium transition-all duration-300 hover:scale-105 hover:text-slate-300 ${
                      isActive
                        ? "text-white bg-green-600 px-3 py-1 rounded-full shadow-lg hover:text-black"
                        : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex gap-4 items-center">
          {["facebook","x-twitter","instagram","tiktok","linkedin"].map((icon) => (
            <i
              key={icon}
              className={`fa-brands fa-${icon} text-xl transition-transform duration-300 hover:text-green-600 hover:scale-125 cursor-pointer`}
            />
          ))}

          {status === "authenticated" ? (
            <>
              <span className="ml-4 font-medium text-lg text-black transition-colors duration-300 hover:text-green-600">
                Hi : {session?.user?.name}
              </span>
              <span
                className="ml-2 cursor-pointer font-medium text-black transition-colors duration-300 hover:text-red-600 hover:scale-105"
                onClick={LogaoutNow}
              >
                Logout
              </span>
            </>
          ) : (
            <>
              <Link
                href="/Regester"
                className="ml-2 font-medium text-black transition-colors duration-300 hover:text-green-600 hover:scale-105"
              >
                Register
              </Link>
              <Link
                href="/Signin"
                className="ml-2 font-medium text-black transition-colors duration-300 hover:text-green-600 hover:scale-105"
              >
                Signin
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars transition-transform duration-300 hover:scale-125 hover:text-green-600" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-green-700 px-6 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-4">
          {links.map((item) => {
            const href = item === "Home" ? "/" : `/${item}`
            const isActive = pathname === href
            return (
              <li key={item}>
                <Link
                  href={href}
                  className={`block text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "text-black bg-yellow-500 px-3 py-1 rounded-full shadow-lg hover:text-black"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item}
                </Link>
              </li>
            )
          })}
          <hr className="border-gray-400" />
          {status === "authenticated" ? (
            <>
              <li className="text-white font-medium">Hi : {session?.user?.name}</li>
              <li className="text-white cursor-pointer font-medium hover:text-red-400" onClick={LogaoutNow}>Logout</li>
            </>
          ) : (
            <>
              <li className="flex gap-3 text-white">
                {["facebook","x-twitter","instagram","tiktok","linkedin"].map((icon) => (
                  <i key={icon} className={`fa-brands fa-${icon} text-xl transition-transform duration-300 hover:text-yellow-300 hover:scale-125`} />
                ))}
              </li>
              <li>
                <Link href="/Regester" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105">Register</Link>
              </li>
              <li>
                <Link href="/Signin" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105">Signin</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
