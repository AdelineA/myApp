import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
        // <nav>
        //     <NavLink to="home">Home</NavLink>
        //     <NavLink to="names">About</NavLink>
        //     <NavLink to="footer">Footer</NavLink>
        // </nav>
        <nav>
          <div class=" bg-indigo-600 py-10 sm:py-">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
              class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="px-6 pt-6 lg:px-8">
            <nav class="flex items-center justify-between" aria-label="Global">
              <div class="flex lg:flex-1">
                {/* <NavLink to={}="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Navlink> */}
              </div>
              <div class="flex lg:hidden">
                <button
                  type="button"
                  class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div class="hidden lg:flex lg:gap-x-12">
                <NavLink
                  to="home"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  Home
                </NavLink>

                <NavLink
                  to="names"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  About
                </NavLink>
                <NavLink
                  to="contact"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="dashboard"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  Dasboard
                </NavLink>

                
              </div>
              <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <NavLink
                  to="login"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </NavLink>
              </div>
            </nav>
          </div>
       </div>
      

    </nav>

    )
  }
}
