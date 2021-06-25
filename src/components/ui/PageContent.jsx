import React from 'react'
import { Link } from 'react-router-dom'

const PageContent = ({ content }) => {
	return (
		<div id="page" className="bg-white md:max-w-2xl xl:max-w-4xl">
			<div className="border-b pb-10">
				<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-10">
					{content.title}
				</h1>
				<p className="text-dim font-light text-lg xl:text-2xl">{content.subtitle}</p>
				{content.info && <p className="mt-7 xl:max-w-2xl xl:text-lg">{content.info}</p>}
			</div>
			<div className="py-6 border-b">
				<h3 className="font-semibold text-xl mb-4">Jump to...</h3>
				<ul className="flex flex-col space-y-4">
					{content.list.map((link) => (
						<Link
							to={`#${link.hash}`}
							className="no-underline list-none bg-blue-50 hover:bg-blue-100 text-gray-800 border-b border-gray-400 w-min whitespace-nowrap"
						>
							{link.title}
						</Link>
					))}
				</ul>
			</div>
			{content.list.map((link) => (
				<div id={`#${link.hash}`} className="py-10 border-b xl:max-w-3xl">
					<h4 className="font-bold text-xl mb-6">{link.title}</h4>
					<p>{link.info}</p>
				</div>
			))}
		</div>
	)
}

export default PageContent
