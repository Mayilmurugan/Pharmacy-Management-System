import React from 'react'
import Navbar from '../Rough/Navbar'
import Sidebar from '../Rough/sidebar'
import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
function home1() {
    
    
    return (
        <>
        <div className='flex flex-col'>
            <div className="fixed w-full z-20">
            <Navbar />
            </div>
       
            <div class="mt-24 flex flex-row ">
                

                
                   
                    <div className='bg-purple-300'>

                    <aside id="separator-sidebar" class="fixed  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div class="h-full px-3 py-4 overflow-y-auto bg-purple-100 dark:bg-purple-800 border-solid border-2 border-purple-300 rounded-md ">
                            <ul class="space-y-2 font-medium">
                            <li>
                                    <a href="\dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-purple-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/drug1" href="#" class="flex items-center p-2 text-white-900 rounded-lg dark:text-purple hover:bg-white group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
  <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
</svg>
                                        <span class="ms-3">Medicine Details</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="/billings" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-purple-300 group">    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt-cutoff" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
  <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z"/>
</svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Billings</span>
                                    </a>
                                </li>
                              
                                <li>
                                    <a href="\vendor1" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-purple-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">Vendors</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="\prescription" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-purple-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-prescription2" viewBox="0 0 16 16">
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg>
                                        <span class="flex-1 ms-3 whitespace-nowrap">prescription</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        
                                        <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                                    </a>
                                </li> */}
                                {/* <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        
                                        <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                    </a>
                                </li> */}
                            </ul>
                            <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-purple-200 dark:border-purple-700">
                                {/* <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        
                                        <span class="ms-3">Upgrade to Pro</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        
                                        <span class="ms-3">Documentation</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        
                                        <span class="ms-3">Components</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a href="/help" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-white dark:hover:bg-purple-700 dark:text-white group">
                                        
                                        <span class="ms-3">Help</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    </div>
                    <div className='ml-64'>
                        
                    </div>
            </div>
           
        </div>
        <Outlet/>

        </>
       
       
    )
   

   
}

export default home1;