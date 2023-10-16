import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import contactImage from '../../../assets/contact.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [emailSuccess, setEmailSuccess] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_EMPLATE_ID, form.current, process.env.REACT_PUBLIC_KEY)
        .then((result) => {
            if(result.text === "OK"){
                setEmailSuccess("Congratulations email sent successfully")
            }
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <h1 className="text-center text-4xl font-semibold">Contact Us</h1>
            <div className='grid grid-cols-5 gap-5 items-center'>
                <div className='col-span-2'>
                    <img className='w-9/12 mx-auto' src={contactImage} alt="" />
                </div>
                <div className='col-span-3 p-7'>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            {...register("name",{required: true})}
                            placeholder="Enter your name" 
                            className="w-full border px-5 py-3 rounded-md focus:outline-none mb-3" 
                        />
                        <input 
                            type="email" 
                            name='email' 
                            id='user_email' 
                            {...register("email",{required: true})}
                            placeholder="Enter your email" 
                            className="w-full border px-5 py-3 rounded-md focus:outline-none mb-3" 
                        />
                        <input 
                            type="tel" 
                            name='tel' 
                            id='tel' 
                            {...register("tel",{required: true})}
                            placeholder="Enter your Phone" 
                            className="w-full border px-5 py-3 rounded-md focus:outline-none mb-3" 
                        />
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="5"
                            {...register("message",{required: true})}
                            className="w-full border px-5 py-3 rounded-md focus:outline-none mb-3"
                            placeholder='Messages'
                            >
                        </textarea>
                        <input 
                            className='bg-[#F9A51A] inline-block mt-2 px-7 py-2 rounded-md text-base font-semibold text-white hover:bg-black duration-500' 
                            type="submit" 
                            value="Submit" 
                        />
                    </form>
                    {emailSuccess && <p>{emailSuccess}</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact