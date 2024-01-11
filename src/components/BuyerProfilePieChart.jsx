import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
	{ name: 'Male', value: 540 },
	{ name: 'Female', value: 620 },
	{ name: 'Other', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#f97316', '#1e1b4b', '#f43f5e']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.2
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function BuyerProfilePieChart() {
	return (
		<div className="w-[25rem] h-[24.5rem] bg-white p-4 flex flex-col">
			<strong className="xt-black-700 font-bold">Buyer Profile</strong>
			<div className="mt-3 w-full flex-1 text-base font-medium">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={400}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={120}
							innerRadius={80}
							cornerRadius={10}
							paddingAngle={-8}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
