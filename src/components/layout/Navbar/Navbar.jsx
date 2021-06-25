import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './Menu/MenuButton'
import logo from '../../../assets/logo.png'

const StyledNav = styled.header`
	background: #181a20;
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	nav {
		padding: 0 16px;
		display: flex;
		height: 50px;
		align-items: center;
		justify-content: space-between;
		@media screen and (min-width: 768px) {
			padding: 0 48px;
		}
		@media screen and (min-width: 1280px) {
			max-width: 1250px;
			height: 60px;
			margin: 0 auto;
			padding: 0 0;
		}
	}
`

const Navbar = () => {
	const links = [
		{ name: 'docs', to: '/docs' },
		{ name: 'tutorial', to: '/tutorial' },
		{ name: 'blog', to: '/blog' },
		{ name: 'community', to: '/community' }
	]

	return (
		<StyledNav>
			<nav>
				<div
					id="left"
					className="flex items-center space-x-1 md:space-x-0 w-4/12 md:w-6/12"
				>
					<div className="md:hidden">
						<MenuButton links={links} />
					</div>
					<div >
						<NavLink
							to="/"
							activeClassName="text-white"
							className="md:-ml-4 md:flex md:items-center md:mr-8 xl:mr-20"
						>
							<img src={logo} alt="React Logo" className="w-12" />
							<span className="hidden md:block font-semibold xl:text-xl hover:text-primary">React</span>
						</NavLink>
					</div>
					<div className="hidden md:flex whitespace-nowrap gap-8 xl:gap-10 items-center capitalize  text-gray-400 xl:text-lg">
						{links.map((link) => (
							<NavLink
								exact
								to={link.to}
								activeClassName="text-primary"
								className="hover:text-gray-300"
							>
								{link.name}
							</NavLink>
						))}
					</div>
				</div>

				<div
					id="right"
					className="w-8/12 md:w-6/12 xl:w-5/12 flex items-center space-x-4 justify-end text-sm md:space-x-6"
				>
					{/* search */}
					<div className="w-9/12">
						<div className="w-full relative">
							<input
								type="search"
								placeholder="Search"
								className="bg-gray-700 px-3 py-1 rounded focus:outline-none w-full xl:text-lg"
							/>
							<div className="absolute top-1/2 right-3 text-gray-500 transform -translate-y-1/2">
								<i class="fa fa-search" aria-hidden="true" />
							</div>
						</div>
					</div>
					{/* links */}
					<div className="hidden md:block">
						<Link to="/">v17.02</Link>
					</div>
					<div>
						<Link
							to="/"
							className="text-4xl md:flex md:items-center md:space-x-3"
						>
							<i class="fa fa-language" aria-hidden="true" />
							<p className="hidden md:block text-sm">Languages</p>
						</Link>
					</div>
					<div className="hidden xl:block">
						<Link to="/" className="flex items-center space-x-2">
							<p>Github</p>
							<div className="text-xs text-gray-500">
								<i class="fa fa-external-link" aria-hidden="true" />
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</StyledNav>
	)
}

export default Navbar
