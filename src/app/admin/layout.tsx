
import StudentPortalFooter from '@/src/components/Footer/StudentPortalFooter'
import StudentPortalNavbar from '@/src/components/Navbar/StudentPortalNavbar'
import AdminPortalSidebar from '@/src/components/Sidemenu/AdminPortalSidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
        title: 'Admin Portal',
        description: 'This is the admin portal for the RCA Web',
}

export default function AdminPortalLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <div className='h-full overflow-hidden w-full'>
                        <StudentPortalNavbar />
                        <div className="flex flex-row h-[75vh] my-1 px-3 gap-3">
                                <AdminPortalSidebar />
                                <div className="w-[90vw] md:w-[75vw] lg:w-[80vw]">
                                        {children}
                                </div>
                        </div>
                </div>
        )
}
