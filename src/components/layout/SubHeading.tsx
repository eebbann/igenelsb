import React from 'react'

export default function SubHeading({title}: {title: string}) {
	return (
		 <h2 className="mt-5 text-4xl font-medium tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent ">
   {title}
</h2>
	)
}

