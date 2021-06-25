import Hero from './Hero'
import InfoCard from './InfoCard'
import styled from 'styled-components'
import Footer from '../../components/layout/Footer/Footer'

const StyledWrapper = styled.div`
background: #fff;
	button {
		height: 45px;
		@media screen and (min-width: 1280px) {
			height: 55px;
		}
	}
`

const Home = () => {
	return (
		<StyledWrapper>
			<Hero />
			<div>
				<InfoCard />
			</div>
			<div className="flex items-center justify-center space-x-3 py-12 bg-lightBg">
				<button
					id="btnBlue"
					className="px-5 font-medium  rounded hover:opacity-90 bg-primary text-gray-800 transition duration-200 xl:text-xl"
				>
					Get Started
				</button>
				<button
					id="otherBtn"
					className="px-5 font-medium flex items-center space-x-2 rounded border border-white transition duration-200 hover:shadow xl:text-xl hover:opacity-90 text-white"
				>
					<p>Take the Tutorial</p>
					<div>
						<i class="fa fa-chevron-right" aria-hidden="true" />
					</div>
				</button>
			</div>
			<Footer />
		</StyledWrapper>
	)
}

export default Home
