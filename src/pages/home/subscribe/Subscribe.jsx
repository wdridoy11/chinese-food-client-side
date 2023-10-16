import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
  const [emailSuccess, setEmailSuccess] = useState("");
  const form = useRef();
  const onSubmit = e => {
    e.preventDefault();
    // console.log(e.target.email.value)
    emailjs.sendForm("service_euj0jua", "template_a3q1cir", form.current, "OOagAnN5-T-B_vTnl")
    .then((result) => {
        if(result.text === "OK"){
          setEmailSuccess("Congratulations email sent successfully")
        }
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className='bg-red-100 py-20'>
        <div className='container mx-auto px-2'>
        <div className="flex flex-col items-center justify-between md:flex-row gap-5">
               <div className="w-full lg:w-1/2">
                  <h1 className="text-black font-bold text-3xl mb-6">Subscribe Our Newsletter</h1>
                  <p className="my-6 text-base text-zinc-600 font-normal w-full lg:w-1/2">
                      Once you have subscribed, you can expect to receive regular updates from the sender according to their schedule,
                  </p>
               </div>
               <div className="w-full lg:w-1/2">
                 <form ref={form} onSubmit={onSubmit} className='block lg:flex'>
                    <input type="email" name="email" className="py-4 px-8 text-lg" id="email" placeholder="Your email address" required/>
                    <input type="submit" className="bg-[#F9A51A] text-white ml-0 mt-3 lg:mt-0 lg:-ml-2 py-4 px-8 border-0 rounded-lg text-lg font-medium
                     hover:bg-black transition duration-150" value="Subscribe" />
                 </form>
                 {emailSuccess && <p className='text-green-500'>{emailSuccess}</p>}
               </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe