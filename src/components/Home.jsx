import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import Solvit from "../img/Solvit.jpg";
import "./home.css";
<home className="css"></home>;

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="imageb">
          <main>
            <div class="relative px-6 lg:px-8">
              <div class="mx-auto max-w-2xl py-32 sm:py-10 lg:py-10">
                <div class="text-center">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Pan-African tech training company
                  </h1>
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      class="rounded-md bg-white px-4.5 py-3.5 text-big font-bold text-indigo-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Discover More <span aria-hidden="true"> →</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] flex">
                <svg
                  class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
            </div>
          </main>
          <div class="bg-indigo-600 py-16 sm:py-22">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dd class="order-first text-1xl font-bold tracking-tight text-white sm:text-5xl">
                    17+
                  </dd>
                  <dd class="text-base leading-4 text-white">Hired With Us</dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dd class="order-first text-1xl font-bold tracking-tight text-white sm:text-5xl">
                    1000+
                  </dd>
                  <dd class="text-base leading-4 text-white">Trained</dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dd class="order-first text-1xl font-bold tracking-tight text-white sm:text-5xl">
                    800+
                  </dd>
                  <dd class="text-base leading-4 text-white">
                    Outsourced talents
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dd class="order-first text-1xl font-bold tracking-tight text-white sm:text-5xl">
                    4+
                  </dd>
                  <dd class="text-base leading-4 text-white">
                    Years in the business
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* our services */}
        <div class="bg-white ">
          <h5 class="text-center font-bold text-indigo-500 mt-36">
            <span>----</span>Our Services
          </h5>
          <h2 class="text-center font-bold text-indigo-700 sm:text-5xl">
            What we do
          </h2>
          <div class="flex gap-y-2 mt-7 ">
            <div class="flex justify-center ml-9 ">
              <div class="Mouse block max-w-sm rounded-lg bg-indigo-600 p-6 shadow-lg text-white">
                <h1 class="font-bold text-3xl">01</h1>
                <h4 class="mb-2 mt-4 text-2xl font-medium ">Trainings</h4>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  We are young university graduate get equipped with in demand
                  tech skills through our training program.
                </p>
              </div>
            </div>
            <div class="flex justify-center ml-5 ">
              <div class="Mouse block max-w-sm rounded-lg bg-indigo-600 p-6 shadow-lg text-white">
                <h1 class="font-bold text-3xl">02</h1>
                <h4 class="mb-2 mt-4 text-2xl font-medium ">Outsourcing</h4>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  We placed skilled individuals from our pool at local and
                  international companies looking to outsource talent.
                </p>
              </div>
            </div>
            <div class="flex justify-center ml-5 ">
              <div class="Mouse block max-w-sm rounded-lg bg-indigo-600 p-6 shadow-lg text-white">
                <h1 class="font-bold text-3xl tex">03</h1>
                <h4 class="mb-2 mt-4 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Office
                </h4>
                <p class="mb-4 mt-4 text-base text-neutral-600 dark:text-neutral-200">
                  We establish remote offices and handle their operations for
                  tech companies looking for scale expand or set base in
                  Rwanda(at fee).
                </p>
              </div>
            </div>
            {/* here */}
          </div>
        </div>
        <div class="bg-white py-24 sm:py-32">
          {/* The team */}
          <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Be Part of us
              </h2>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Want to become a part of the youthful driving force of Africa’s
                tech ecosystem? Well, we exist to help you achieve this. Learn
                more about our various training and skill development programmes
                or join our talent pool today to position yourself on the radar
                of opportunities from our partner companies.
              </p>

              <button class="bg-white text-indigo-600 mt-3 font-bold py-4 px-16 rounded border-indigo-600 border">
                JOIN US <span aria-hidden="true"> →</span>
              </button>
            </div>
            <div class="flex ">
              <img src={Solvit} class="ml-40 max-w-xl" alt="" />
            </div>
          </div>
        </div>
        <footer class="bg-indigo-700 text-white ">
          <h1 class="text-center font-extrabold mb-6">Quick links</h1>
          <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-bold text-white uppercase ">
                Developer
              </h2>
              <ul class="text-white">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    Browse job
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Browse Category
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Job alert
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-bold text-white uppercase ">
                Employer
              </h2>
              <ul class="text-white ">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Browse talent
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Employer Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-bold text-white uppercase">
                About Us
              </h2>
              <ul class="text-white">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Job Page
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Post your Resume
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-bold text-white uppercase ">
                More info
              </h2>
              <ul class="text-white ">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    +2507807897897
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    KIMIHURURA KN 54 St
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    info@Solvit.africa
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/">SolvIt</a>. All Rights
              Reserved.
            </span>
            
          </div>
        </footer>
      </div>
    );
  }
}
