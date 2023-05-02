import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-red-100 py-20'>
        <div className='container mx-auto'>
        <div class="flex flex-col items-center justify-between md:flex-row">
               <div class="w-full lg:w-1/2">
                  <h1 class="text-black font-bold text-3xl mb-6">Subscribe Our Newsletter</h1>
                  <p class="my-6 text-base text-zinc-600 font-normal w-full lg:w-1/2">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed tenetur fuga non nam esse veniam.
                  </p>
               </div>
               <div class="w-full lg:w-1/2">
                 <form>
                    <input type="email" name="email" class="py-4 px-8 text-lg" id="email" placeholder="Your email address" />
                    <input type="submit" class="bg-red-500 text-white ml-0 mt-3 lg:mt-0 lg:-ml-2 py-4 px-8 border-0 rounded-lg text-lg font-medium
                     hover:bg-black transition duration-150" value="Subscribe" />
                 </form>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe