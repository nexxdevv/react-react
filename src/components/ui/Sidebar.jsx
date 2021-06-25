import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledSidebar = styled.div`
	width: 27%;
	top: 50px;
	bottom: 0;
	@media screen and (min-width: 1280px) {
		top: 60px;
	}
`

const Sidebar = ({title, links}) => {
	return (
		<StyledSidebar className="fixed right-0 bg-sidebar px-3 pt-20">
			<h4 className="uppercase text-sm font-bold ml-3">{title}</h4>
			<div className="flex flex-col ml-8 mt-4 space-y-2 capitalize">
				{links.map((link) => (
					<Link to="/" key={link}>
						{link}
					</Link>
				))}
			</div>
		</StyledSidebar>
	)
}

export default Sidebar
