import React from 'react'
import Script from "next/script"

const NavBar = ({profile}) => { 
  
  return (
    <>
    <Script src="/assets/js/main.js"></Script>
      <div>
        <div className="fixed w-full z-50 top-0 py-3 sm:py-5  bg-violet-900 ">
          <div className=" container flex items-center justify-between mx-auto">
            <div className='mx-2'>
              <a href="/">
              <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
              </a>
            </div>
            <div className="hidden lg:block pr-4">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <a href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Services</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Portfolio</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#clients"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Clients</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Work</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Blog</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </>
  )
}

export default NavBar