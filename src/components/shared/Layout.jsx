import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className="bg-white flex h-screen w-screen">
			{/*     */}
			<Sidebar />
			<div className="flex flex-col flex-1 font-sans">
				<Header />
				<div className="flex-1 px-10 py-2 min-h-40 overflow-hidden">
					{/* { - auto } */}
					<Outlet />
				</div>
			</div>
		</div>
	)
}
