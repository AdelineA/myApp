import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
     <div class="bg-white">
       <div class="bg-white ">
          <h5 class="text-center font-bold text-indigo-500 mt-36">
            <span>----</span>Our Services
          </h5>
          <h2 class="text-center font-bold text-indigo-700 sm:text-5xl">
            What we do
          </h2>
          <div class="flex gap-y-2 mt-7">
            <div class="flex justify-center ml-9 ">
              <div class="block max-w-sm rounded-lg bg-indigo-600 p-6 shadow-lg text-white">
                <h1 class="font-bold text-3xl">01</h1>
                <h4 class="mb-2 mt-4 text-2xl font-medium ">Trainings</h4>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  We are young university graduate get equipped with in demand
                  tech skills through our training program.
                </p>
              </div>
            </div>
            <div class="flex justify-center ml-5">
              <div class="block max-w-sm rounded-lg bg-indigo-600 p-6 shadow-lg text-white">
                <h1 class="font-bold text-3xl">02</h1>
                <h4 class="mb-2 mt-4 text-2xl font-medium ">Outsourcing</h4>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  We placed skilled individuals from our pool at local and
                  international companies looking to outsource talent.
                </p>
              </div>
            </div>
            <div class="flex justify-center ml-5">
              <div class="block max-w-sm rounded-lg bg-indigo-600 p-6 shadow-lg text-white">
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
      
     </div>
    )
  }
}
