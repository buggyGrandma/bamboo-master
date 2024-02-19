"use client"
import React, { useEffect, useState } from "react"
import { AXIOS } from "../../../axios.config"
import { InputType } from "../desktopHeaderCategory"

const CategorySection = () => {
	const [input, setInput] = useState<InputType[]>([] as InputType[])
	useEffect(() => {
		AXIOS.get("category/categories")
			.then((results) => setInput(results.data))
			.catch((err) => console.error(err))
	}, [])
	console.log(input)
	return (
		<div className='flex flex-col items-center gap-10 p-20'>
			<h3 className='flex text-lg font-extrabold text-secondary'>
				دسته بندی <p className='text-primary'>محصولات</p>
			</h3>
			<div className='flex flex-wrap justify-evenly gap-x-6 gap-y-10 '>
				{input
					.flatMap((item) => item.subcategories)
					.map((category) => {
						return (
							<div className='flex flex-col items-center gap-5 '>
								<img
									className=' h-[200px] w-[200px] justify-items-center rounded-full '
									src={`http://185.19.201.5:1000/file/${category.subcategoryIcon ? category.subcategoryIcon : category.icon}`}
									alt={category.title}
								/>

								<div className='font-semibold text-secondary'>{category.title}</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default CategorySection
