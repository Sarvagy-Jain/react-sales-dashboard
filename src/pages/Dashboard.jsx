import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularFoods from '../components/PopularFoods'
import Visitors from '../components/Visitors'
export default function Dashboard() {
	return (
		<div className="flex flex-col gap-2">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-5 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
				<Visitors></Visitors>
			</div>
			<div className="flex flex-row gap-5 w-full">
				<PopularFoods />
				<RecentOrders />
			</div>

		</div>
	)
}
