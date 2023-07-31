import React from 'react'

const NewStudent = () => {
        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        < h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2' >Register New Student</h2 >
                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, </p>
                        <div className="my-10 grid grid-cols-2 gap-5">
                                <div className="w-[50%] md:w-full h-full bg-[rgba(67,67,67,0.03)]   rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex justify-center items-center">Drag and Drop</div>
                                <div className="w-[50%] md:w-full">
                                        <input type="text" placeholder='Student Name' className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder='Student Email' className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <div className="grid grid-cols-2 my-2 gap-2">
                                                <input type="text" placeholder='Class of Student' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                                <input type="text" placeholder='Promotion in-take' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        </div>
                                        <textarea placeholder='Description of the student' className=" my-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2"></textarea>
                                </div>
                                <div className="w-[50%] md:w-full">
                                        <input type="text" placeholder='Province Of Residence' className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                </div>
                                <div className="w-[50%] md:w-full">
                                        <input type="text" placeholder='District Of Residence' className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                </div>
                        </div>
                        <div className="my-10">
                                <p>Parent Details</p>
                                <div className="grid grid-cols-2 gap-x-5">
                                        <input type="text" placeholder="Father's Name" className='   my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder="Father's Email" className='   my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder="Father's Phone Number" className='   my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder="Mother's Name" className='   my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder="Mother's Email" className='   my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input type="text" placeholder="Mother's Phone Number" className='   my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                </div>
                        </div>
                        <div className="my-10 flex flex-row gap-10">
                                <button className='bg-[rgba(67,67,67,0.03)]  text-black rounded-md  border-[2px] border-[rgba(67,67,67,0.09)] px-5 py-2' >Cancel Creation</button>
                                <input type="submit" value={"Create Student | Details"} className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2' />
                        </div>
                </div >
        )
}

export default NewStudent