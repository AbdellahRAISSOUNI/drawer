import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-900 text-white">
        <div className='flex items-baseline justify-center pt-20'>
            <h2 className='text-white border px-3 p-2 rounded-full text-center border-white'>See What's New | <span className='text-sky-300'>AI Diagram</span></h2>
        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Documents & Diagrams for engineering teams.

      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Learn More
        </a>

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
