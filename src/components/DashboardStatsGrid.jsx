import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-10 pb-7">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-black-500 text-1xl font-bold">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">Rs542320</strong>
						<span className="text-sm text-green-500 pl-2">+3430</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-black-500 text-1xl font-bold">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">Rs44230</strong>
						<span className="text-sm text-green-500 pl-2">-3430</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-indigo-900">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-black-500 text-1xl font-bold">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1231</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-black-500 text-1xl font-bold">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1643</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white p-2 flex-1 border-l border-purple-900 flex items-center">{children}</div>
}
