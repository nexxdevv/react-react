import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fbos from '../../../assets/fbos.png'

const StyledFooter = styled.footer`
	background: #181a20;
	color: white;
	#wrapper {
		@media screen and (min-width: 768px) {
			padding: 0 48px;
			width: 70%;
		}
		@media screen and (min-width: 1280px) {
			padding:  0 90px;
		}
	}
	

	a:hover {
		color: var(--primary-color);
	}

	#comm {
		a:nth-child(2)::after {
			font-family: "Font Awesome 5 Free", sans-serif;
			font-weight: 900;
			content: "\f35d";
			font-size: 12px;
			padding-left: 8px;
			color: #535866;
		}
	}
	#more {
		a:nth-child(4)::after,
		a:nth-child(5)::after,
		a:nth-child(6)::after {
			font-family: "Font Awesome 5 Free", sans-serif;
			font-weight: 900;
			content: "\f35d";
			font-size: 12px;
			padding-left: 8px;
			color: #535866;
		}
	}
`
const Footer = () => {
	const docs = [ 'installation', 'main concepts', 'advanced guides', 'testing', 'FAQ' ]
	const channels = [ 'github', 'stack overflow', 'discussion forums', 'facebook', 'twitter' ]
	const comm = [ 'code of conduct', 'community resources' ]
	const more = [ 'tutorial', 'blog', 'react native', 'privacy', 'terms' ]
	return (
		<StyledFooter className="py-10">
			<div id="wrapper" className="px-5 xl:px-0">
				<div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-y-6 gap-x-7 ">
					<div className=" flex flex-col capitalize">
						<h3 className=" font-bold mb-4 uppercase">Docs</h3>
						{docs.map((link) => (
							<Link to="/" key={link} className="mb-2">
								{link}
							</Link>
						))}
					</div>
					<div className=" flex flex-col capitalize">
						<h3 className=" font-bold mb-4 uppercase">channels</h3>
						{channels.map((link) => (
							<Link
								to="/"
								key={link}
								className="mb-2 flex items-center space-x-2 whitespace-nowrap"
							>
								<p>{link}</p>
								<div className="text-xs text-gray-500">
									<i class="fa fa-external-link" aria-hidden="true" />
								</div>
							</Link>
						))}
					</div>
					<div id="comm" className=" flex flex-col capitalize">
						<h3 className=" font-bold mb-4 uppercase">community</h3>
						{comm.map((link) => (
							<Link to="/" key={link} className="mb-2 whitespace-nowrap">
								{link}
							</Link>
						))}
					</div>
					<div id="more" className=" flex flex-col capitalize">
						<h3 className=" font-bold mb-4 uppercase">more</h3>
						{more.map((link) => (
							<Link to="/" key={link} className="mb-2">
								{link}
							</Link>
						))}
					</div>
				</div>
				<div className="mt-10">
					<div className="flex items-center justify-center mb-3">
						<img src={fbos} className="w-40" alt="Facebook Open Source logo" />
					</div>
					<p className="text-center text-xs">
						Copyright &copy; 2021 <br /> SuperVision Design for Facebook Inc.
					</p>
				</div>
			</div>
		</StyledFooter>
	)
}

export default Footer
