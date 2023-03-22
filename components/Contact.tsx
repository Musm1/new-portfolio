import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

export default function Contact({}: Props) {

    const { 
        register, 
        handleSubmit
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href= `mailto:musm123456@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name},${formData.message}
        (${formData.email})`
    }

  return (
    <div className='relative flex flex-col items-center h-screen mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='mt-4 text-2xl font-semibold text-center md:mt-0'>
                Want to connect?.{" "}
                <span className='decoration-[#49f70a] underline'> Email me.</span>
            </h4>
            <div className='space-y-3 md:space-y-5'>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='text-[#49f70a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+92-310-9562202</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='text-[#49f70a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>musm123456@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <MapPinIcon className='text-[#49f70a] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Phase 3 Hayatabad Peshawar</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto space-y-2 w-fit'>

                <div className='flex flex-col space-x-2 space-y-2 md:flex-row md:space-y-0'>
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text"/>
                    <input {...register('email')} placeholder='Email' className="contactInput" type="email"/>
                </div> 

                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>

                <textarea {...register('message')} placeholder="Message" className="contactInput"/>

                <button 
                type='submit'
                className='bg-[#49f70a]/90 py-5 px-10 rounded-md 
                text-black font-bold text-lg'>Submit</button>

            </form>

        </div>
    </div>
  )
}