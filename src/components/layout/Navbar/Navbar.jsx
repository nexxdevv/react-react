import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './Menu/MenuButton'
import logo from '../../../assets/logo.png'

const StyledNav = styled.header`
	background: #181a20;
	color: #fff;
	nav {
		padding: 10px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		@media screen and (min-width: 768px) {
			padding: 1rem 24px;
		}
		@media screen and (min-width: 1280px) {
			padding: 1rem 32px;
		}
	}
`

const Navbar = () => {
	const links = [
		{ name: 'docs', to: '/projects' },
		{ name: 'tutorial', to: '/about-us' },
		{ name: 'blog', to: '/contact-us' },
		{ name: 'community', to: '/services' }
	]

	return (
		<StyledNav>
			<nav>
				<div id="left" className="border border-black flex items-center space-x-1 w-4/12">
					<div className="md:hidden">
						<MenuButton links={links} />
					</div>
					<div>
						<Link to="/">
							<img src={logo} alt="React Logo" className="w-16" />
						</Link>
					</div>
					<div className="hidden md:flex items-center  text-sm relative">
						<input
							type="search"
							placeholder="Search or jump to..."
							className="border rounded px-3 focus:outline-none"
							style={{ height: '28px', width: '260px' }}
						/>
						<div className="absolute right-3 opacity-70 text-gray-800">
							<i className="fa fa-search" aria-hidden="true" />
						</div>
					</div>
					<div className="hidden md:flex whitespace-nowrap gap-4 items-center capitalize text-sm font-medium text-gray-500">
						{links.map((link) => (
							<NavLink
								exact
								to={link.to}
								activeClassName="text-gray-900"
								className="hover:text-gray-600"
							>
								{link.name}
							</NavLink>
						))}
					</div>
				</div>

				<div id="right" className="w-8/12 flex items-center space-x-4 justify-end">
					<div className="w-9/12">
						<div className="w-full relative">
							<input
								type="search"
								placeholder="Search"
								className="bg-gray-700 px-3 py-1 rounded focus:outline-none w-full"
							/>
							<div className="absolute top-1/2 right-3 text-gray-500 transform -translate-y-1/2">
								<i class="fa fa-search" aria-hidden="true" />
							</div>
						</div>
					</div>
					<div>
						<Link to="/notifications" className="text-4xl">
							<i class="fa fa-language" aria-hidden="true" />
						</Link>
					</div>
				</div>
			</nav>
		</StyledNav>
	)
}

export default Navbar
