import Link from 'next/link'
import React from 'react'

const page = () => {
        return (
                <div className='flex items-center justify-center h-[50%]'>
                        <div className='rounded-[0.625rem] border border-gray-400 border-opacity-10 px-[2.75rem] py-[1.5rem] text-center max-w-[38%]'>
                                <h2 className='text-[#00000082]  font-extrabold text-[1.3125rem]'>School Account Login</h2>
                                <p className='text-[#4343436E] font-medium text-sm'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                <form>
                                        <input type="text" className='text-black rounded-md border border-gray-400 border-opacity-9 bg-[#4343430D] w-full px-[1.94rem] py-[1rem] outline-none focus:outline-none my-2.5 placeholder:text-black' placeholder='School Student Code' />
                                        <input type="password" className='text-black rounded-md border border-gray-400 border-opacity-9 bg-[#4343430D] w-full px-[1.94rem] py-[1rem]  outline-none focus:outline-none my-2.5  placeholder:text-black' placeholder='Password' />
                                        <div className="my-2.5 flex flex-row justify-between">
                                                <div className="flex flex-row gap-5">
                                                        <input type="checkbox" name="remember" id="remember" className='w-[1.56rem] h-[1.56rem] rounded-[0.5rem] border-[#D9D9D9]' />
                                                        <p className='text-[#4343436D] text-sm font-medium'>Remember Me</p>
                                                </div>
                                                <Link href={"/forgot-password"} className='font-medium text-[#523873] text-sm'>Forgot my password</Link>
                                        </div>
                                        <input type="submit" value="Login" className='rounded-full border border-[#2955C56E] border-opacity-43 bg-[#523873] text-white px-[3.5rem]  py-3 my-2.5 text-[1rem] w-[60%]' />
                                </form>
                                <p className='text-[#4343436D] font-medium text-sm text-left'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons
                                        adipisci velit, sed quia non numquam eius modi ullma tempora incidunt
                                        ut labore et dolore magnam aliquam.
                                </p>
                                <button className='float-left text-[#52387387] my-1.5'>Read more...</button>
                        </div>
                </div>
        )
}

export default page