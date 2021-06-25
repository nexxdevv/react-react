import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledMenu = styled.div`
	position: fixed;
	top: 50px;
	left: 0;
	width: 55%;
	height: 100vh;
	background: #181a20;

	z-index: 2;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
	transition: 0.5s cubic-bezier(0.11, 0, 0.5, 0);
	transition-delay: 0.2s;
	div {
		padding: 5rem 20px;
		display: flex;
		flex-direction: column;
		a {
			margin-bottom: 1rem;
			text-transform: capitalize;
		}
	}
`

const Menu = ({ open, close, links }) => {
	return (
		<StyledMenu open={open}>
			<div>
				{links.map((link) => (
					<NavLink onClick={close} to={link.to} key={link.name} className="text-2xl">
						{link.name}
					</NavLink>
				))}
			</div>
		</StyledMenu>
	)
}

export default Menu
