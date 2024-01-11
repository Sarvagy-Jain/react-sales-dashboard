import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Chicken Biryani',
		product_thumbnail: 'https://www.istockphoto.com/photo/chicken-biriyani-gm1345624336-423638329?irclickid=x4tUp2TxvxyPTmMyFW0goTZdUkH2i1WPEzJt140&irgwc=1&cid=IS&utm_medium=affiliate&utm_source=Jakub+Kapusnak&clickid=x4tUp2TxvxyPTmMyFW0goTZdUkH2i1WPEzJt140&utm_term=SRP-T&utm_content=258824&irpid=1263831',
		product_price: 'Rs300.00',
		product_ordered: 986
	},
	{
		id: '7633',
		product_name: 'Masala dosa',
		product_thumbnail: 'https://source.unsplash.com/100x100?dosa	',
		product_price: 'Rs120.00',
		product_ordered: 804
	},
	{
		id: '6534',
		product_name: 'Chicken fried rice',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: 'Rs200.00',
		product_ordered: 660
	},
	{
		id: '9234',
		product_name: 'Paneer butter masala',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: 'Rs230.00',
		product_ordered: 560
	},
	{
		id: '4314',
		product_name: 'Butter naan',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: 'Rs50.00',
		product_ordered: 540
	},
	{
		id: '4342',
		product_name: 'Veg fried rice',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: 'Rs150.00',
		product_ordered: 501
	}
]

function PopularFoods() {
	return (
		<div className="w-[40rem] bg-white p-4">
			<strong className="text-black-700 font-bold">Popular Products</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>

						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.product_ordered === 0
										? 'text-red-500'
										: product.product_ordered > 50
											? 'text-green-500'
											: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_ordered + ' Orders in last week'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularFoods