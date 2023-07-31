import React from 'react'

const ReportCards = () => {
        const students = [
                {
                        id: 1,
                        name: 'John Doe',
                        email: 'Jane Doe@gmail.com',
                        status: 'uploaded',
                        parentphone: '123-456-7890',
                        class: 'Year 2',
                },
                {
                        id: 2,
                        name: 'Alice Smith',
                        email: 'Bob Smith@gmail.com',
                        status: 'missing',
                        parentphone: '987-654-3210',
                        class: 'Year 3',
                },
                {
                        id: 2,
                        name: 'Alice Smith',
                        email: 'Bob Smith@gmail.com',
                        status: 'missing',
                        parentphone: '987-654-3210',
                        class: 'Year 1',
                },
                {
                        id: 2,
                        name: 'Alice Smith',
                        email: 'Bob Smith@gmail.com',
                        status: 'uploaded',
                        parentphone: '987-654-3210',
                        class: 'Year 2',
                },
                {
                        id: 2,
                        name: 'Alice Smith',
                        email: 'Bob Smith@gmail.com',
                        status: 'missing',
                        parentphone: '987-654-3210',
                        class: 'Year 3',
                },
                {
                        id: 2,
                        name: 'Alice Smith',
                        email: 'Bob Smith@gmail.com',
                        status: 'missing',
                        parentphone: '987-654-3210',
                        class: 'Year 1',
                }
        ]
        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <div className="flex flex-row justify-between">
                                <h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2'>Send Report Cards for Students </h2>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Uploading Report Cards for the newly created Term</p>
                        </div>
                        <div className="flex flex-row justify-between my-5">
                                <input type="text" className='bg-[rgba(67,67,67,0.09)] px-3 py-2 rounded-md border-[2px] border-[rgba(67,67,67,0.03)] w-[30vw]' placeholder='Search Class or Name or Email | Phone' />
                                <div className="flex flex-row gap-3">
                                        <button className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2'>Create New Term</button>
                                        <button className='bg-[rgba(82,56,115,0.5)] rounded-md text-[rgba(82,56,115)] px-5 py-2'>Release All the Report Cards</button>
                                </div>
                        </div>
                        <table className="w-full rounded-lg text-[rgba(67,67,67,0.71)]">
                                <tr className="bg-[rgba(237,238,243)] text-[rgba(48,7,98,0.8)] py-10 rounded-md">
                                        <th className="p-2">#</th>
                                        <th className="p-2">Student Name</th>
                                        <th className="p-2">Student Email</th>
                                        <th className="p-2">Class</th>
                                        <th className="p-2">Parent Phone</th>
                                        <th className="p-2">Status</th>
                                        <th className="p-2">Upload</th>
                                </tr>
                                {students.map((student, index) => (
                                        <tr
                                                key={index}
                                                // className="my-5 border-[2px] border-white rounded-lg text-center "
                                                className={index % 2 === 0 ? 'bg-[rgba(67,67,67,0.03)] my-20 text-center rounded-lg' : 'bg-[rgba(67,67,67,0.06)] text-center rounded-lg'}
                                        >
                                                <td className="p-2">{student.id}</td>
                                                <td className="p-2">{student.name}</td>
                                                <td className="p-2">{student.email}</td>
                                                <td className="p-2">{student.class}</td>
                                                <td className="p-2">{student.parentphone}</td>
                                                <td className={student.status === "missing" ? "text-red-500 p-2" : "text-green-500 p-2"}>{student.status}</td>
                                                <td className="p-2 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                                                <path d="M11.9999 10.586L16.2429 14.828L14.8279 16.243L12.9999 14.415V20H10.9999V14.413L9.17189 16.243L7.75689 14.828L11.9999 10.586ZM11.9999 2.2216e-08C13.7169 8.17698e-05 15.374 0.631114 16.6561 1.77312C17.9382 2.91512 18.756 4.48846 18.9539 6.194C20.1982 6.53332 21.2836 7.2991 22.0206 8.35753C22.7575 9.41595 23.099 10.6997 22.9855 11.9844C22.872 13.2691 22.3106 14.473 21.3995 15.3858C20.4883 16.2986 19.2854 16.8622 18.0009 16.978V14.964C18.4611 14.8983 18.9035 14.7416 19.3025 14.503C19.7014 14.2644 20.0488 13.9487 20.3245 13.5744C20.6001 13.2001 20.7984 12.7746 20.9078 12.3228C21.0172 11.8711 21.0355 11.402 20.9616 10.9431C20.8878 10.4841 20.7232 10.0445 20.4776 9.64985C20.232 9.25519 19.9102 8.91342 19.5311 8.64447C19.152 8.37552 18.7231 8.18479 18.2694 8.08341C17.8158 7.98203 17.3465 7.97203 16.8889 8.054C17.0455 7.32489 17.037 6.56997 16.8641 5.84455C16.6912 5.11913 16.3582 4.44158 15.8895 3.86153C15.4208 3.28147 14.8283 2.81361 14.1554 2.49219C13.4824 2.17078 12.7461 2.00397 12.0004 2.00397C11.2546 2.00397 10.5183 2.17078 9.84542 2.49219C9.1725 2.81361 8.57999 3.28147 8.1113 3.86153C7.64261 4.44158 7.3096 5.11913 7.13668 5.84455C6.96375 6.56997 6.95528 7.32489 7.11189 8.054C6.19955 7.88267 5.25651 8.08079 4.49024 8.60476C3.72396 9.12874 3.19722 9.93565 3.02589 10.848C2.85456 11.7603 3.05268 12.7034 3.57666 13.4697C4.10063 14.2359 4.90755 14.7627 5.81989 14.934L5.99989 14.964V16.978C4.71534 16.8623 3.5123 16.2989 2.60103 15.3862C1.68976 14.4735 1.12822 13.2696 1.01457 11.9848C0.900915 10.7001 1.24237 9.41628 1.97926 8.35777C2.71615 7.29926 3.8016 6.53339 5.04589 6.194C5.2436 4.48838 6.0613 2.91491 7.34347 1.77287C8.62565 0.63082 10.2829 -0.000136703 11.9999 2.2216e-08Z" fill="#475FDE" />
                                                        </svg>
                                                </td>
                                        </tr>
                                ))}
                        </table>
                </div>
        )
}

export default ReportCards