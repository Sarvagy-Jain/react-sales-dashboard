import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass =
	'flex items-center gap-6 font-light px-3 py-4 hover:bg-slate-50-700 hover:no-underline active:bg-violet-600 rounded-3xl text-2xl'

export default function Sidebar() {
	return (
		<div className="bg-violet-700 p-3 flex flex-col">
			<div className="flex items-center gap-4 px-1 ">
				<FcBullish fontSize={50} />
				<span className="text-neutral-200 text-5xl">SpiceSaga</span>
			</div>
			<div className="py-20 flex flex-1 flex-col gap-2.0 text-3xl font-medium ">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-slate-50 text-2xl text-blue-900 font-bold' : 'text-neutral-100', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>

			{link.label}


		</Link>
	)
}
