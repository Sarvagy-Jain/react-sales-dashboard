import React from 'react'
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Expense: 40000,
		Income: 45000
	},
	{
		name: 'Feb',
		Expense: 25000,
		Income: 31098
	},
	{
		name: 'Mar',
		Expense: 60000,
		Income: 90800
	},
	{
		name: 'Apr',
		Expense: 27800,
		Income: 39008
	},
	{
		name: 'May',
		Expense: 18900,
		Income: 48000
	},
	{
		name: 'Jun',
		Expense: 23900,
		Income: 30800
	},
	{
		name: 'July',
		Expense: 34900,
		Income: 43000
	},
	{
		name: 'Aug',
		Expense: 80000,
		Income: 98000
	},
	{
		name: 'Sep',
		Expense: 27800,
		Income: 39080
	},
	{
		name: 'Oct',
		Expense: 18900,
		Income: 48000
	},
	{
		name: 'Nov',
		Expense: 23090,
		Income: 30800
	},
	{
		name: 'Dec',
		Expense: 30490,
		Income: 43000
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[23rem] bg-white flex flex-col flex-1 ">
			<strong className="text-black-700 font-bold">Transactions</strong>
			<div className="mt-1w-full flex-1 text-base font-medium">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart width={730} height={250} data={data}
						margin={{ top: 2, right: 30, left: 5, bottom: 1 }}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="Income" stroke="#82ca9d" />
						<Line type="monotone" dataKey="Expense" stroke="#d88484" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
