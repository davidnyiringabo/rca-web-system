import React from 'react'

const AdminCustomization = () => {
        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2'>Customization of the Website</h2>
                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Landing Page</p>
                        <div className="my-2 grid grid-cols-3 grid-rows-2 gap-3">
                                <div className="bg-[rgba(67,67,67,0.03)]  h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)]"></div>
                                <div className="bg-[rgba(67,67,67,0.03)]  h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)]"></div>
                                <div className="bg-[rgba(67,67,67,0.03)]  h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)]"></div>
                                <div className="bg-[rgba(67,67,67,0.03)]  h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)]"></div>
                                <div className="bg-[rgba(67,67,67,0.03)]  h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)]"></div>
                                <div className="bg-[rgba(67,67,67,0.03)]  h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)]"></div>
                        </div>
                        <div className="my-10 flex flex-col md:flex-row gap-2 md:gap-5">
                                <div className='w-full md:w-[50%]'>
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>About Us Text</p>
                                        <textarea placeholder='Enter About Section Text appearing on the landing page' className="text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2"></textarea>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Innovation Text</p>
                                        <textarea placeholder='Enter Innovation section Text appearing on the landing page' className="text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2"></textarea>
                                </div>
                        </div>
                        <div className='my-10'>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>School Numbers Section</p>
                                <div className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2       ">
                                        <input type="text" placeholder='Years of Foundation' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Stakeholders and Partners' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Students Number' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Number of Startups' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                </div>
                        </div>
                        <div className="my-10">
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Social Media Links and Contacts</p>
                                <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <input type="text" placeholder='Years of Foundation' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Stakeholders and Partners' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Students Number' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Number of Startups' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Years of Foundation' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Stakeholders and Partners' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Students Number' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Number of Startups' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Years of Foundation' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Stakeholders and Partners' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                </div>
                        </div>
                        <div className="my-10 flex flex-row gap-10">
                                <button className='bg-[rgba(67,67,67,0.03)]  text-black rounded-md  border-[2px] border-[rgba(67,67,67,0.09)] px-5 py-2' >Cancel Changes</button>
                                <input type="submit" value={"Save Changes"} className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2' />
                        </div>
                </div>
        )
}

export default AdminCustomization